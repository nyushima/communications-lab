var sounds = [
  "audio/0.wav",
  "audio/1.wav",
  "audio/2.wav",
  "audio/3.wav",
  "audio/4.wav",
  "audio/5.wav"
];

for (var i = 0; i < sounds.length; i++) {
  // create an audio player just for this file
  const player = document.createElement("audio");
  player.loop = true;
  player.src = sounds[i];
  document.body.appendChild(player);

  // create a button to trigger the sounds
  const btn = document.createElement("button");
  btn.innerHTML = "Sound " + (i + 1);
  document.body.appendChild(btn);

  btn.addEventListener("click", function() {
    if (player.paused) {
      player.play();
      btn.className = "active";
    } else {
      player.pause();
      btn.className = "";
    }
  });
}
