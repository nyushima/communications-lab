var x;
var y;
var diameter;

function setup() {
  createCanvas(600, 600);
  background(100);

  x = 0;
  y = height/2;
  diameter = 10;
}


function draw() {
  // update the variables
  x += 5;            // x = x + 2;
  diameter ++;  // diameter = diameter + 1;

  // display
  fill(255,0,0);
  ellipse(x, y, diameter, diameter);
}
