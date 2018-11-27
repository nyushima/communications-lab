function setup() {
  createCanvas(500, 600);
  noStroke();
}


function draw() {
  background(100);

  // red rect
  push();

  translate( width/2, height/2 );
  rotate( frameCount * 0.01 );
  scale( 1.5 );

  rectMode(CENTER);
  fill(255, 0, 0);
  rect(0, 0, 100, 100);

  pop();

  // yellow rect
  push();

  translate( width/2, height/2 );
  rotate( frameCount * 0.03 );
  scale( 0.5 );

  rectMode(CENTER);
  fill(255, 255, 0);
  rect(0, 0, 100, 100);

  pop();

  // blue rect
  push();

  translate( 100, 100 );
  rotate( frameCount * -0.06 );
  scale( 1.0 );

  rectMode(CENTER);
  fill(0, 0, 255);
  rect(0, 0, 100, 100);

  pop();
}
