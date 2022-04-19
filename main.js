var myVideo = document.getElementById('klip');

function playPause() {
    if (myVideo.paused)
    myVideo.play();

    else myVideo.pause();
}