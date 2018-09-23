/* when adjust color value */

// red-ish color
var r = 200;
var g = 0;
var b = 0;

// let's make it brighter!
r = r + 50;
g = g + 50;
b = b + 50;

var newColor = "rgb(" + r + "," + g + "," + b + ")";
var bgColor = "rgb(255, 255, 0)";  // yellow

console.log( "newColor: " + newColor );

document.getElementById('title1').style.color = newColor;
document.getElementById('title1').style.backgroundColor = bgColor;
