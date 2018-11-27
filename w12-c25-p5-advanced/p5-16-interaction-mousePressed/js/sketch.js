var r, g, b;

function setup() {
  createCanvas(500, 600);
  background(100);
}


function draw() {
  //background(0);

  strokeWeight(10);
  stroke(r, g, b);

  // mouseIsPressed is an environment "variable" which returns true or false
  if (mouseIsPressed == true) {
    // this will be executed repeatedly while mouse is being pressed.
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


// mousePressed is a built-in "function" in p5 which can be fired by mouse interaction
function mousePressed() {
  // this will be executed only once when mouse is pressed.
  r = random(255);
  g = random(255);
  b = random(255);
}
