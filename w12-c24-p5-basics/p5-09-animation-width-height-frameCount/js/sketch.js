function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  // draw a green circle at the center
  fill(0, 255, 0);
  ellipse(300, 300, 300, 300);
}


function draw() {
  fill(255,0,0);
  ellipse(width/2, height/2, frameCount, frameCount);
  // width, height and frameCount are environment variables fo p5.

  console.log(frameCount);
}
