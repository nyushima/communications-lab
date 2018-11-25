// Create canvas element
var canvasElement1 = document.getElementById("canvas1");
var context1 = canvasElement1.getContext("2d");

// Create gradient
var gradient1 = context1.createLinearGradient(0,0,0,400);
gradient1.addColorStop(0,"#ff0000");
gradient1.addColorStop(1,"#0000ff");

// Fill with gradient
context1.fillStyle = gradient1;
context1.fillRect(0,0,600,400);
