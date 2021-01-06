//DOM for all
const video = document.getElementById('screen');
const play = document.getElementById('play');
const stop1 = document.getElementById('stop');
const pause = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

///play and pause//
function toggleVideo(){

    if(video.paused){
        video.play();
    }else{
        video.pause();

    }
}

//update the play pause icon
function updateIcon(){
    if(video.paused){
        play.innerHTML = `<i class= "fa fa-play fa-2x"></i>`;
    }else{
        play.innerHTML = `<i class= "fa fa-pause fa-2x"></i>`;
    }
}

//stop video
function stop1Video(){

    video.currentTime = 0;
    video.pause();
}

//update ptogress//
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;

    ///getmins//
    let mins = Math.floor(video.currentTime/60)*100;
    if(mins<10){
        mins = '0' + String(mins);
    }

    //getsecs//
    let secs = Math.floor(video.currentTime%60);
    if(secs<10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

//setVideoProgress//
function setVideoProgress(){

    video.currentTime=(+progress.value* video.duration)/100;
}



//Event Listneres////
video.addEventListener('click',toggleVideo);
video.addEventListener('pause',updateIcon);
video.addEventListener('play',updateIcon);
video.addEventListener('timeupdate',updateProgress);
stop1.addEventListener('click',stop1Video);
progress.addEventListener('change',setVideoProgress);




