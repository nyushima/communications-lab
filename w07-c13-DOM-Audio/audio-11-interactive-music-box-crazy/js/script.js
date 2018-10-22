var sounds = [
  "audio/sound0.wav",
  "audio/sound1.wav",
  "audio/sound2.wav",
  "audio/sound3.wav",
  "audio/sound4.wav",
  "audio/sound5.wav",
  "audio/sound6.wav",
  "audio/sound7.wav",
  "audio/sound8.wav"
];

// let's create 300 buttons to trigger random sounds!
for (var i = 0; i < 300; i++) {

  // create an audio player just for this file
  const player = document.createElement("audio");
  // now the index of the sounds array is random!
  var index = Math.floor( Math.random() * sounds.length );
  player.src = sounds[index];
  document.body.appendChild(player);

  // create a button to trigger the sounds
  const btn = document.createElement("button");
  document.body.appendChild(btn);
  btn.addEventListener("click", function() {
    // play the sound from the beginning
    player.currentTime = 0;
    player.play();
    // and change the button color to a random color
    var r = Math.floor( Math.random() * 255 );
    var g = Math.floor( Math.random() * 255 );
    var b = Math.floor( Math.random() * 255 );
    var color = "rgb(" + r + "," + g + "," + b + ")";
    btn.style.backgroundColor = color;
  });

}
