var player = document.getElementById("player");
var message = document.getElementById("message");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var randomBtn = document.getElementById("randomBtn");  // ***

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);
randomBtn.addEventListener("click", changeRandomly);  // ***


function playVideo() {
  player.play();

  updateMessage();
}

function pauseVideo() {
  player.pause();

  updateMessage();
}

function stopVideo() {
  player.currentTime = 0;
  player.volume = 1.0;
  player.playbackRate = 1.0;
  player.pause();

  updateMessage();
}

function changeRandomly() {
  // jump to a random position
  player.currentTime = Math.random() * player.duration;  // range from 0.0 to the duration of the video file

  // change volume randomly
  player.volume = Math.random();  // range: 0.0 - 1.0 (0 - 100%)

  // change the rate randomly too! ( 1.0: normal, 2.0: doubled 0.5: half speed )
  player.playbackRate = 0.5 + Math.random() * 1.5; // range: 0.5 - 2.0

  updateMessage();
}

function updateMessage() {
  message.innerHTML = "time: " + player.currentTime
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + player.volume;
  message.innerHTML += "<br>";
  message.innerHTML += "rate: " + player.playbackRate;
}
