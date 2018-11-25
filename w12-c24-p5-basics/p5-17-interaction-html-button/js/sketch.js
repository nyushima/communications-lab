var circleColor = "red";
var circleSize = 150;

function turnRed() {
  circleColor = "red";
}

function turnGreen() {
  circleColor = "green";
}

function growCircle() {
  circleSize += 10;
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(240);

  if (circleColor === "red") {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }

  ellipse(width / 2, height / 2, circleSize, circleSize);
}
