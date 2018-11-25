function setup() {
  createCanvas(500, 600);
  background(0);
  noFill();
  rectMode(CENTER);
}


function draw() {
  //background(0);
  push();
  translate(width/2,height/2);
  rotate( radians(frameCount) );
  stroke(255,0,255,30);
  rect(0,0,frameCount*3,frameCount*1);
  pop();

  /*
  translate(width/2,height/2);
  //rotate(PI);
  scale(2.0);
  stroke(255,0,0);
  rect(0,0,200,100);

  translate(10,20);
  //rotate(PI);
  scale(1.0);
  stroke(255,255,0);
  rect(0,0,200,100);
  */
}
