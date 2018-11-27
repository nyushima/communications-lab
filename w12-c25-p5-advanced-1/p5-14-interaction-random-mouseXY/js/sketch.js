function setup() {
  createCanvas(500, 600);
  background(0);
}


function draw() {
  //background(0);

  stroke(random(255),random(255),random(255),random(255));
  line(width/2, height/2, mouseX, mouseY);
  // mouseX and mouseY are also environment variables from p5.
}
