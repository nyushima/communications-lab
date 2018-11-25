function setup() {
  createCanvas(500, 500);
  background(200); // (0-255) grayscale

  // draw a point
  point(50, 50); // (x, y)
  // draw a line
  line(50, 100, 200, 100); // (x1, y1, x2, y2)
  // draw a rectangle
  rect(50, 150, 150, 80); // (x, y, w, h)   // x, y is the left-top corner of the rectangle
  // draw a triangle
  triangle(50, 300, 50, 400, 200, 400); // (x1, y1, x2, y2, x3, y3)
  // draw an ellipse
  ellipse(350, 150, 80, 150); // (x, y, w, h)   // x, y is the center of the ellipse
  // draw a circle
  ellipse(350, 350, 120, 120); // (x, y, w, h)
}

function draw() {

}
