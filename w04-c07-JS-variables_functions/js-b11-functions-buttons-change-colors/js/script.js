var r = 0;
var g = 0;
var b = 0;
var myBox = document.getElementById('box');

function addMoreRed() {
  r = r + 10;
  changeBgColor();
}

function addMoreGreen() {
  g = g + 10;
  changeBgColor();
}

function addMoreBlue() {
  b = b + 10;
  changeBgColor();
}

function changeBgColor() {
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "RGB: " + r + "," + g + "," + b);
}
