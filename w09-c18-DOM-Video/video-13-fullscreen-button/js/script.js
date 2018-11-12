var vid = document.getElementById('myVideo');

var btn = document.getElementById('btnReplay');
btn.style.opacity = "0.3";


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
  btn.style.position = "absolute";
  btn.style.width = Math.floor(vid.width * 0.10) + "px";
  btn.style.height = Math.floor(vid.height * 0.10) + "px";
  btn.style.left = Math.floor(vid.width * 0.27) + "px";
  btn.style.top = Math.floor(vid.height * 0.15) + "px";

}

function replayVideo() {
  vid.currentTime = 0;
  vid.play();
}
