var player = document.getElementById("player");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);

function playVideo() {
  player.play();
}

function pauseVideo() {
  player.pause();
}

function stopVideo() {
  player.currentTime = 0;
  player.pause();
}
