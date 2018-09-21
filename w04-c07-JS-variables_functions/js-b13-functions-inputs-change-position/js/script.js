var xPos = 50;
var yPos = 100;
var myBox = document.getElementById('box');


function updatePosition() {
  var xValue = parseInt( document.getElementById('xInput').value );
  var yValue = parseInt( document.getElementById('yInput').value );

  // parseInt(), parseFloar() and Number()
  // https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

  console.log( "xInput: " + xValue + ", yInput: " + yValue);

  movePosition( xValue, yValue );
}

function movePosition( x, y ) {
  xPos = xPos + x;  // xPos += x;
  yPos = yPos + y;  // yPos += y;

  myBox.style.left = xPos + "px";
  myBox.style.top = yPos + "px";

  console.log( "left: " + xPos + ", top: " + yPos);
}
