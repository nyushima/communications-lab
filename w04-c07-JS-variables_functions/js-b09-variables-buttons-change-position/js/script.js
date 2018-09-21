var xPos = 50;
var yPos = 100;
var myBox = document.getElementById('box');

function moveUp() {
  yPos = yPos - 10;
  myBox.style.top = yPos + "px";
  console.log( "top: " + yPos );
}

function moveDown() {
  yPos = yPos + 10;
  myBox.style.top = yPos + "px";
  console.log( "top: " + yPos );
}

function moveLeft() {
  xPos = xPos - 10;
  myBox.style.left = xPos + "px";
  console.log( "left: " + xPos );
}

function moveRight() {
  xPos = xPos + 10;
  myBox.style.left = xPos + "px";
  console.log( "left: " + xPos );
}
