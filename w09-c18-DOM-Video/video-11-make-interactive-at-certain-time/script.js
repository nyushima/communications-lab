var player = document.getElementById("player");

player.addEventListener("timeupdate", timeUpdated);

var step = 0;
var link;

function timeUpdated() {
  if (step === 0 && player.currentTime > 5) {
    link = document.createElement("a");
    link.href = "page2.html";
    link.className = "invisible";
    document.body.appendChild(link);
    step++;
  } else if (step === 1 && player.currentTime > 10) {
    document.body.removeChild(link);
    step++;
  }
}
