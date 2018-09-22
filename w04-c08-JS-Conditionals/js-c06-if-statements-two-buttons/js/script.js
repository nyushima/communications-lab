var button1 = false;
var button2 = false;


function button1Clicked() {
  button1 = true;
  document.getElementById('button1-state').innerHTML = button1;

  changeBoxColor();
}


function button2Clicked() {
  button2 = true;
  document.getElementById('button2-state').innerHTML = button2;

  changeBoxColor();
}


function changeBoxColor() {
  var box = document.getElementById('color-box');

  // 'and' logical operator
  if (button1 == true && button2 == true) {
    box.style.backgroundColor = "red";
  }

  /*
  // 'or' logical operator
  if (button1 == true || button2 == true) {
    box.style.backgroundColor = "blue";
  }
  */
}
