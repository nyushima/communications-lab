function setup() {
  createCanvas(500, 600);
  noStroke();
}


function draw() {
  background(100);

  fill(255, 0, 0);
  rotatingRectangle(width/2, 100, 0.5, 0.02);

  fill(255, 255, 0);
  rotatingRectangle(width/2, 300, 1.0, 0.04);

  fill(0, 0, 255);
  rotatingRectangle(width/2, 500, 1.5, 0.06);

  fill(random(255), random(255), random(255));
  rotatingRectangle(mouseX, mouseY, 0.3, 0.10);
}


function rotatingRectangle(x, y, size, speed) {
  push();

  translate( x, y );
  rotate( frameCount * speed );
  scale( size );

  rectMode(CENTER);
  rect(0, 0, 100, 100);

  pop();
}
