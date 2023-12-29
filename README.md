# DubAI

## Introduction


Addressing Challenges in Audiovisual Translation with Innovative AI Models

The increasing prevalence of generative AI technology in creative content production has posed a notable challenge, particularly in the translation of visual and spoken content. While text-based content can be easily translated, the complexity increases when dealing with audio and video. This transition often results in the loss of the original sentence's intended meaning, presenting a significant hurdle for content creation industries.
Industry Challenges

In practical terms, this challenge necessitates production companies to assemble comprehensive teams comprising linguists, dubbing artists, and editors for translating and dubbing audiovisual works, such as movies. This financial burden can hinder the distribution of exceptional films to wider audiences, especially when resources are limited. Similarly, small-scale content creators may face similar challenges due to these inherent complexities.
Linguistic and Perceptual Discrepancies

When viewers engage with dubbed visual content, they frequently encounter linguistic and perceptual discrepancies. This arises from the absence of synchronization between the spoken words and the actors' lip movements in the dubbed version. Essentially, the dubbed audio is superimposed onto the original visuals without any adjustment to match the actors' lip movements, resulting in incongruity and language comprehension difficulties.
Research conducted by Disney Corp. underscores the importance of phonetics and lip movements in language comprehension, suggesting that up to 20% of language understanding is contingent on these factors. Disney has adopted meticulous measures to ensure accurate lip movements in their animated characters, aligning with the target audience's language for a more immersive viewing experience.
Innovative Solution: TorToise TTS, Wav2Lip Speech to text, and Language Translation

To address these challenges, an innovative model aims to revolutionize the way audiovisual content is translated and dubbed for diverse audiences. This model combines TorToise TTS, Wav2Lip, and basic language translation to synchronize both the audio and lip movements with the target language. This synchronization ensures that the audio matches the lip movements of the actors, providing a more authentic viewing experience for the audience.
This comprehensive solution offers a breakthrough in the process of language localization in audio and video content, potentially transforming the landscape of content creation and distribution.
Eight step approach

    1. Take video as input (assumptions - face is visible at all times, spoken in some other language than English.)
    2. Separate Audio and Video (removing audio from video and saving audio file)
    3. Speech to text for Hindi audio
    4. Hindi to English translation.
    5. Training the voice generator on pitch and amplitude of custom voice given as input.
    6. Generating a new voice file using the trained model to make it speak the translated English text in custom voice.
    7. Syncing lips on the non-audio video file with the newly generated audio file.
    8. Download and save new output video

## Code

All the necessary files, models and libraries needed in the smooth running of this program are installed and imported in cell 1. All any new user has to do is run the notebook in Google Colab and upload any video of them with face visible at all times speaking Hindi when prompted. Everything else will be taken care of by the standalone code. Your video will be downloaded at the end of all cells run for checking the results.

## Future Work

Much of the work can be done in trying to copy my accent as it is. Another area is adding more language models to recognize which language is the original video in, and then using that particular translation model to convert it into the language of need. Contributions are appreciated as I am working on it alone.

## Umeed hai aapko achha lage. Or, should I say, Hope you like it :)

