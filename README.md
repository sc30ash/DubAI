## DubAI

# Introduction


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
Four step approach

    Take video as input (assumptions - face is visible at all times, spoken in some other language than English.)
    Separate Audio and Video (removing audio from video and saving audio file)
    Speech to text for Hindi audio
    Hindi to English translation.
    Training the voice generator on pitch and amplitude of custom voice given as input.
    Generating a new voice file using the trained model to make it speak the translated English text in custom voice.
    Syncing lips on the non-audio video file with the newly generated audio file.
    Download and save new output video

