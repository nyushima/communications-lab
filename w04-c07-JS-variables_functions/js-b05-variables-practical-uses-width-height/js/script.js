/* when changing width and height */

var w = 200;
var h = 220;

w = w + 100;
h = h + 100;

var newWidth = w + "px";
var newHeight = h + "px";

console.log( "width & height: " + newWidth + " " + newHeight );

//document.getElementById('box').style.width = newWidth;
//document.getElementById('box').style.height = newHeight;

var myBox = document.getElementById('box');
myBox.style.width = newWidth;
myBox.style.height = newHeight;
