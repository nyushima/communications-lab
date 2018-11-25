function setup() {
  createCanvas(500, 500);
  background(200);

  noStroke();  // remove stroke
  fill(255, 0, 0);  // red
  ellipse(50, 150, 100, 150);

  fill(255, 255, 0); // yellow
  ellipse(200, 150, 220, 100);

  ellipseMode(CORNER); // change the ellipseMode to CORNER
  fill(255, 0, 255, 150); // with opacity
  ellipse(400, 150, 100, 100); // now the x, y position is the left-top corner of the ellipse.

  stroke(0, 0, 255);
  strokeWeight(5);
  point(50, 150);
  point(200, 150);
  point(400, 150);
  point(500/2, 500/2); // the center of the canvas

  ellipseMode(CENTER); // return the mode to default

  noFill(); // remove fill color

  stroke(0, 255, 0);
  strokeWeight(2);
  ellipse(500/2, 500/2, 300, 300);

  stroke(0, 255, 255);
  strokeWeight(10);
  arc(500/2, 500/2, 300, 300 , PI*0.25, PI*0.75); // (x, y, w, h, startingAngle, endingAngle)
}

function draw() {

}
