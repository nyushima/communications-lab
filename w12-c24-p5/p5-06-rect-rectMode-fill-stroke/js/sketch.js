function setup() {
  createCanvas(500, 500);
  background(200);

  noStroke();  // remove stroke
  fill(255, 0, 0);  // red
  rect(50, 150, 100, 150);

  fill(255, 255, 0); // yellow
  rect(200, 150, 220, 100);

  rectMode(CENTER);  // change the rectMode to CENTER
  fill(255, 0, 255, 150); // with opacity
  rect(400, 150, 100, 100); // now the x, y position is the center of the rectangle.

  stroke(0, 0, 255);
  strokeWeight(5);
  point(50, 150);
  point(200, 150);
  point(400, 150);

  rectMode(CORNER);  // return the mode to default
  stroke(0, 255, 0);
  strokeWeight(2);
  noFill(); // remove fill color
  rect(100, 220, 300, 200);
}

function draw() {

}
