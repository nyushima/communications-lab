var images = [
  "images/walking0.jpg",
  "images/walking1.jpg",
  "images/walking2.jpg",
];
var currentIndex = 0;


// image
var img = document.createElement("img");
img.src = images[currentIndex];
document.body.appendChild(img);

// player
var player = document.getElementById("player");
player.addEventListener("timeupdate", playerProgressed);

// buttons
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
startBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);


// player event + image animation
function playerProgressed(e) {
  currentIndex++;
  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  img.src = images[currentIndex];
}


// buttons' functions
function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}
