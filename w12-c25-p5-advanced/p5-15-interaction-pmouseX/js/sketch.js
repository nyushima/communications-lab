function setup() {
  createCanvas(500, 600);
  background(0);
}


function draw() {
  //background(0);

  strokeWeight(10);
  stroke(255, 255, 0);
  line(pmouseX, pmouseY, mouseX, mouseY);
  // pmouseX and pmouseY are also environment variables from p5.
  // "Previous" mouse position!
}
