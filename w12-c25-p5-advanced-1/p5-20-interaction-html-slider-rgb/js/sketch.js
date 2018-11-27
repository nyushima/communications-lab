var sliderR = document.getElementById("colorRed");
var sliderG = document.getElementById("colorGreen");
var sliderB = document.getElementById("colorBlue");

sliderR.addEventListener("input", changeColorRed);
sliderG.addEventListener("input", changeColorGreen);
sliderB.addEventListener("input", changeColorBlue);

var colorR = 0;
var colorG = 0;
var colorB = 0;

function changeColorRed(e) {
  colorR = e.target.value;
}

function changeColorGreen(e) {
  colorG = e.target.value;
}

function changeColorBlue(e) {
  colorB = e.target.value;
}


// p5 Functions

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(200);
  fill(colorR, colorG, colorB);
  ellipse(width / 2, height / 2, 300, 300);
}
