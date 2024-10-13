let audioContext;

// Load the audio file into an AudioBuffer
function loadAudio() {
    return fetch('sounds/blast.ogg')
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
}

// Create and play sound instances with a small time offset
function playSoundWithOffsets(numberOfInstances, offset) {
    loadAudio().then(audioBuffer => {
        for (let i = 0; i < numberOfInstances; i++) {
            // Create a new AudioBufferSourceNode for each instance
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            const startTime = audioContext.currentTime + (i * offset);
            source.start(startTime);
        }
    }).catch(error => {
        console.error('Error loading or playing sound:', error);
    });
}

document.getElementById('play-sound-button').addEventListener('click', () => {
    // Ensure the AudioContext is created or resumed on the first user gesture
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    const delay = 0.1
    const reps = 5

    // Resume the AudioContext if it is suspended
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            playSoundWithOffsets(reps, delay);
        });
    } else {
        playSoundWithOffsets(reps, delay);
    }
});