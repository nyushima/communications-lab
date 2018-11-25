function setup() {
  createCanvas(500, 600);
  background(0);
  noStroke();
}


function draw() {
  //background(0);

  // random(255);
  // generate a random float from 0 to 255

  // random(30, 80);
  // generate a random float from 30 to 80
  
  var diameter = random(5, 50);
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(width), random(height), diameter, diameter);
}
