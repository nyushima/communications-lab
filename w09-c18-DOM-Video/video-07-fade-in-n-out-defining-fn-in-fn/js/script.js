var player = document.getElementById("player");
var message = document.getElementById("message");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var fadeInBtn = document.getElementById("fadeInBtn");  // ***
var fadeOutBtn = document.getElementById("fadeOutBtn");  // ***

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);
fadeInBtn.addEventListener("click", fadeIn);  // ***
fadeOutBtn.addEventListener("click", fadeOut);  // ***

var volume = 1.0;
var fadeEffect;
var intervalTime = 100; // 0.1 sec

function fadeIn() {
  // clear the previous effect first
  clearInterval(fadeEffect);
  // and apply a new effect
  fadeEffect = setInterval( function(){
    volume += 0.05;
    if (volume > 1.0) {
      volume = 1.0;
      clearInterval(fadeEffect);  // ***
    }
    player.volume = volume;
    updateMessage();
  }, intervalTime );
}

function fadeOut() {
  // clear the previous effect first
  clearInterval(fadeEffect);
  // and apply a new effect
  fadeEffect = setInterval( function(){
    volume -= 0.05;
    if (volume < 0.0) {
      volume = 0.0;
      clearInterval(fadeEffect);  // ***
    }
    player.volume = volume;
    updateMessage();
  }, intervalTime );
}

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
  player.pause();
  updateMessage();
}

function updateMessage() {
  message.innerHTML = "time: " + player.currentTime
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + player.volume;
}
