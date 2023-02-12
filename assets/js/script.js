// create  interview array with objects for tracks
const interviewList = [
    {
        title: "Interview 1",
        path: 'https://digital.lib.utk.edu/collections/islandora/object/wwiioh%3A2002/datastream/PROXY_MP3'
    },
    {
        title: "Interview 2",
        path: "https://digital.lib.utk.edu/collections/islandora/object/wwiioh%3A2003/datastream/PROXY_MP3"
    }
]
// inital isPlaying set to false to used throughout
let isPlaying = false;

// pause and play function that operates the audio

const pausePlay = () => {    

        if (isPlaying === false) {        
            currentTrack.play();        
            setPausePlayIcon(isPlaying)
            isPlaying = true;
            console.log(isPlaying)
        } else if (isPlaying === true) {
            currentTrack.pause()
            setPausePlayIcon(isPlaying)
            isPlaying = false;
            console.log(isPlaying)
        }
}
// back function resets timer to zero and adjusts pause play icons
const back = () => {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    setPausePlayIcon(isPlaying)
}
// function to check the current pause and play status
const setPausePlayIcon = (isPlaying) => {
    if (isPlaying === false) {
        pausePlayIcon.classList.remove('bi-play');
        pausePlayIcon.classList.add('bi-pause');

    }  else if (isPlaying === true) {
        pausePlayIcon.classList.remove('bi-pause');
        pausePlayIcon.classList.add('bi-play');
    }
}
// create variables from DOM
const playButton = document.getElementById('play-button');
const pausePlayIcon = document.getElementById('play-icon');
const backButton = document.getElementById('back-button');
const skipButton = document.getElementById('skip-button');

let currentTrack = new Audio(interviewList[0].path);

// event listeners to execute functions
playButton.addEventListener('click', pausePlay);
backButton.addEventListener('click', back);
backButton.addEventListener('click', skip);

