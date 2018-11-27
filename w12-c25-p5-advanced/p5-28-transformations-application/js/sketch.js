function setup() {
  createCanvas(500, 600);
  background(0);
  noFill();
  rectMode(CENTER);
}


function draw() {
  //background(0);

  push();
  translate(width/2, height/2);
  rotate( radians(frameCount) );
  stroke(255, 0, 255, 30);
  rect(0, 0, frameCount*3, frameCount*1);
  pop();
}
