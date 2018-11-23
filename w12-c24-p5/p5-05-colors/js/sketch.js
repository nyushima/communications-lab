function setup() {
  createCanvas(500, 500);

  // color parameters
  // (w)          : white(grayscale)
  // (w, a)       : white, alpha(opacity)
  // (r,g,b)      : red, green, blue
  // (r,g,b,a)    : red, green, blue, alpha
  // value range  : 0 - 255

  background(255, 0, 0); // red

  strokeWeight(5);    // change the thickness of lines(strokes)
  stroke(0, 0, 255);  // change the color of the strokes
  fill(255, 255, 0);  // change the fill color

  point(50, 50); // (x, y)
  line(50, 100, 200, 100); // (x1, y1, x2, y2)
  rect(50, 150, 150, 80); // (x, y, w, h)
  triangle(50, 300, 50, 400, 200, 400); // (x1, y1, x2, y2, x3, y3)
  ellipse(350, 150, 80, 150); // (x, y, w, h)
  ellipse(350, 350, 120, 120); // (x, y, w, h)
}

function draw() {

}
