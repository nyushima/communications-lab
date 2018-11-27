function setup() {
  createCanvas(500, 600);
}


function draw() {
  background(100);

  push();

  translate( width/2, height/2 );
  scale( 0.5 ); // play with the value. (e.g. 1.0: original size, 0.5: half, 2.0: doubled)

  noStroke();

  // red rect
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(0, 0, 100, 100);

  // yellow rect
  rectMode(CORNER);
  fill(255, 255, 0);
  rect(0, 0, 100, 100 );

  // blue rect
  rectMode(CENTER);
  fill(0, 0, 255);
  rect(200, 0, 50, 50 );

  // points
  stroke(0, 255, 0);
  strokeWeight(5);
  point(0, 0);
  point(200, 0);

  pop();
}
