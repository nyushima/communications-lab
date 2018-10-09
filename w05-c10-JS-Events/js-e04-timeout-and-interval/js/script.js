// Start a timeout and an interval
setTimeout(timeoutFunction, 1000);
var interval = setInterval(intervalFunction, 1000);

function timeoutFunction() {
  console.log("Timeout called!");
}

function intervalFunction() {
  console.log("Interval called!");
}

// code to stop the interval
var btn = document.getElementById("btn");
btn.addEventListener("click", clicked);

function clicked(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}
