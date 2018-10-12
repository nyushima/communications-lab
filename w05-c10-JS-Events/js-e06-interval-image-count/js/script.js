var interval = setInterval(swapImage, 200);
var imgNum = 0;

function swapImage() {
  var img = document.getElementById('walking-img');
  var imgFilename = "images/walking" + imgNum + ".jpg";
  img.src = imgFilename;

  imgNum++;
  if (imgNum == 3) {
    imgNum = 0;
  }
}


// code to stop/start the interval
var btnStop = document.getElementById("btn-stop");
btnStop.addEventListener("click", stopInterval);

var btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", startInterval);


function stopInterval(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}

function startInterval() {
  interval = setInterval(swapImage, 200);
}
