var vid = document.getElementById('myVideo');
var btnReplay = document.getElementById('btnReplay');
var btnStop = document.getElementById('btnStop');

btnReplay.style.display = "block"; // shown
btnReplay.style.opacity = "0.3";
btnStop.style.display = "none"; // hidden
btnStop.style.opacity = "0.3";


var step = 0;
var popupOpened = false;

function timeUpdated() {
  console.log(vid.currentTime);

  // update the "step" variable first
  var t = vid.currentTime;
  if (t >= 0 && t < 2.5) {
    step = 0;
    popupOpened = false; // reset the boolean(true or false) value.
  } else if (t >= 2.5 && t < 4.5) {
    step = 1;
  } else if (t >= 4.5 && t < 5.0) {
    step = 2;
  } else {
    step = 3;
  }

  // then use it
  if (step == 1) {
    btnStop.style.display = "block"; // shown
  } else {
    btnStop.style.display = "none"; // hidden
  }

  if (step == 3 && popupOpened == false) {
    // you have to unblock pop-up windows.
    window.open("popup.html", "_blank", "left=50, top=50, width=150, height=300");
    popupOpened = true;
  }
}


window.onload = function() {
  adjustVideoSize();
}

window.onresize = function() {
  adjustVideoSize();
}

function adjustVideoSize() {
  // check the dementions of the video clip
  // 4:3? 16:9?
  if (window.innerWidth/window.innerHeight >= 16/9) {
    vid.width = window.innerWidth;
    vid.height = window.innerWidth * 9/16;
  } else {
    vid.width = window.innerHeight * 16/9;
    vid.height = window.innerHeight;
  }
  // And then, change the button's position and size according to the video's width and height;
  btnReplay.style.position = "absolute";
  btnReplay.style.width = Math.floor(vid.width * 0.10) + "px";
  btnReplay.style.height = Math.floor(vid.height * 0.10) + "px";
  btnReplay.style.left = Math.floor(vid.width * 0.15) + "px";
  btnReplay.style.top = Math.floor(vid.height * 0.15) + "px";

  btnStop.style.position = "absolute";
  btnStop.style.width = Math.floor(vid.width * 0.10) + "px";
  btnStop.style.height = Math.floor(vid.height * 0.10) + "px";
  btnStop.style.left = Math.floor(vid.width * 0.30) + "px";
  btnStop.style.top = Math.floor(vid.height * 0.15) + "px";
}

function replayVideo() {
  vid.currentTime = 0;
  vid.play();
}

function pauseVideo() {
  vid.pause();
}
