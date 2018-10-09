window.addEventListener("scroll", scrolled);
window.addEventListener("resize", resized);

function scrolled() {
  console.log("window scrolled");
}

function resized(e) {
  console.log(
    "Window resized to " + window.innerWidth + "x" + window.innerHeight
  );
}
