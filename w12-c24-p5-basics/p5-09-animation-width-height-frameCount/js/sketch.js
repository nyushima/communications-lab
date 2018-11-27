function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  // draw a green circle at the center
  fill(0, 255, 0);
  ellipse(300, 300, 300, 300);
}


function draw() {
  background(0); // clear the previous frame

  fill(255,0,0);
  ellipse(width/2, height/2, frameCount, frameCount);
  // width, height and frameCount are environment variables fo p5.


  // you can display text(String) by using text() function.
  // text( "Hello!", x, y );
  fill(255);
  text( frameRate(), 10, 20 ); // frameRate() returns how many frames are drawn per secound. 
  text( frameCount, 10, 40 );
}
