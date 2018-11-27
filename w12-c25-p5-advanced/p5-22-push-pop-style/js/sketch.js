function setup() {
  createCanvas(500, 600);
}


function draw() {
  background(100);

  push(); // ***
  fill(255, 0, 0);
  stroke(0, 0, 255);
  strokeWeight(5);

  rect(50, 50, 200, 200);

  rect(150, 150, 200, 200);
  pop(); // ***

  rect(250, 250, 200, 200);
}
