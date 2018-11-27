var msg = document.getElementById("message");
var body = document.body;


function setup() {
  createCanvas(600, 600);
  background(100);
}


function draw() {
  if (mouseX < 200) {
    msg.innerHTML = "No no, move mouse to right.";
  }
  else if (mouseX > 400) {
    msg.innerHTML = "No no, move mouse to left.";
  }

  if (mouseY < 200) {
    msg.innerHTML = "No no, move mouse to bottom.";
  }
  else if (mouseY > 400) {
    msg.innerHTML = "No no, move mouse to top.";
  }

  if (mouseIsPressed == true) {
    background(random(255),random(255),random(255));
    msg.innerHTML = "DON'T PRESS MOUSE!";
    body.style.backgroundColor = "rgb(255,0,0)";
  } else {
    body.style.backgroundColor = "rgb(255,255,255)";
  }
}
