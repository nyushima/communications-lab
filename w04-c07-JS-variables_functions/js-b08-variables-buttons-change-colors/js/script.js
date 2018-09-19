var r = 0;
var g = 0;
var b = 0;
var myBox = document.getElementById('box');

function addMoreRed() {
  r = r + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "red: " + r );
}

function addMoreGreen() {
  g = g + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "green: " + g );
}

function addMoreBlue() {
  b = b + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "blue: " + b );
}
