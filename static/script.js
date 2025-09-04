document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const outputVideo = document.getElementById('outputVideo');
    const outputPlaceholder = document.getElementById('outputPlaceholder');
    const processingIndicator = document.getElementById('processingIndicator');
    const downloadBtn = document.getElementById('downloadBtn');
    const progressBar = document.getElementById('progressBar');
    const progress = document.querySelector('.progress-bar');
    
    // File upload handling
    browseBtn.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', handleFileUpload);
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileUpload();
        }
    });
    
    // Handle file upload and processing
    function handleFileUpload() {
        if (!fileInput.files.length) return;
        
        const file = fileInput.files[0];
        const validTypes = ['video/mp4', 'video/quicktime'];
        
        if (!validTypes.includes(file.type)) {
            alert('Please upload an MP4 or MOV video file.');
            return;
        }
        
        if (file.size > 100 * 1024 * 1024) {
            alert('File size exceeds 100MB limit.');
            return;
        }
        
        // Show progress bar
        progressBar.style.display = 'block';
        progress.style.width = '0%';
        
        // Create FormData for the file
        const formData = new FormData();
        formData.append('file', file);
        
        // Show processing state
        outputPlaceholder.style.display = 'none';
        processingIndicator.style.display = 'flex';
        downloadBtn.style.display = 'none';
        
        // Upload file to server
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            
            const taskId = data.task_id;
            progress.style.width = '30%';
            checkTaskStatus(taskId);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Upload failed: ' + error.message);
            resetUI();
        });
    }
    
    // Check task status periodically
    function checkTaskStatus(taskId) {
        fetch(`/status/${taskId}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'processing') {
                progress.style.width = '60%';
                setTimeout(() => checkTaskStatus(taskId), 2000);
            } 
            else if (data.status === 'completed') {
                progress.style.width = '100%';
                
                // Show result after short delay
                setTimeout(() => {
                    outputVideo.src = data.output;
                    outputVideo.style.display = 'block';
                    processingIndicator.style.display = 'none';
                    downloadBtn.style.display = 'block';
                    downloadBtn.onclick = () => {
                        window.location.href = `/download/${data.output.split('/').pop()}`;
                    };
                    
                    // Reset progress after completion
                    setTimeout(() => {
                        progressBar.style.display = 'none';
                        progress.style.width = '0%';
                    }, 1000);
                }, 1000);
            }
            else if (data.status === 'error') {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Processing failed: ' + error.message);
            resetUI();
        });
    }
    
    // Reset UI to initial state
    function resetUI() {
        outputPlaceholder.style.display = 'flex';
        processingIndicator.style.display = 'none';
        outputVideo.style.display = 'none';
        downloadBtn.style.display = 'none';
        progressBar.style.display = 'none';
        progress.style.width = '0%';
        fileInput.value = '';
    }
});