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
let isPlaying = false;

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

const back = () => {
    currentTrack.pause();
    currentTrack.currentTime = 0;
    setPausePlayIcon(isPlaying)
}

const setPausePlayIcon = (isPlaying) => {
    if (isPlaying === false) {
        pausePlayIcon.classList.remove('bi-play');
        pausePlayIcon.classList.add('bi-pause');

    }  else if (isPlaying === true) {
        pausePlayIcon.classList.remove('bi-pause');
        pausePlayIcon.classList.add('bi-play');
    }
}

const playButton = document.getElementById('play-button');
const pausePlayIcon = document.getElementById('play-icon');
const backButton = document.getElementById('back-button');
const skipButton = document.getElementById('skip-button');
let currentTrack = new Audio(interviewList[0].path);


playButton.addEventListener('click', pausePlay);
backButton.addEventListener('click', back);
backButton.addEventListener('click', skip);

