function setup() {
  createCanvas(500, 600);
}


function draw() {
  background(100);

  strokeWeight(15);

  push(); // ***
  translate( width/2, height/2 ); // shift the origin position to the center of the canvas

  // red rect
  noStroke();
  fill(255, 0, 0);
  rect(0, 0, 150, 150);

  // point at the origin
  stroke(0, 255, 0);
  point(0, 0);

  pop(); // ***

  // blue rect
  noStroke();
  fill(0, 0, 255);
  rect(100, 100, 150, 150);

  // point at the origin
  stroke(0, 255, 0);
  point(0, 0);
}
