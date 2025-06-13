const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const playbackSpeedSlider = document.querySelector('.playback-speed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause Functionality
toggle.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚'; // Change text to pause icon
    } else {
        video.pause();
        toggle.textContent = '►'; // Change text to play icon
    }
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Playback Speed Control
playbackSpeedSlider.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Skip/Seek Buttons
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10; // Rewind 10 seconds
});

forwardButton.addEventListener('click', () => {
    video.currentTime += 25; // Skip 25 seconds
});

// Progress Bar
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

// Error Handling
video.addEventListener('error', () => {
    alert('Video failed to load. Please check the source.');
});