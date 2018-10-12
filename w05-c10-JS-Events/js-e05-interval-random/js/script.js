var interval = setInterval(changeColor, 1000);

function changeColor() {
  var r = parseInt( Math.random() * 255 );
  var g = parseInt( Math.random() * 255 );
  var b = parseInt( Math.random() * 255 );

  var randomColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( randomColor );

  document.body.style.backgroundColor = randomColor;

}

// code to stop the interval
var btn = document.getElementById("btn");
btn.addEventListener("click", clicked);

function clicked(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}
