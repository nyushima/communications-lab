var dragger = document.getElementById("dragger");
dragger.addEventListener("dragstart", dragstart);
dragger.addEventListener("dragend", dragend);

function dragstart(e) {
  console.log("drag started");
}

function dragend(e) {
  console.log("drag stopped");
  dragger.style.left = e.clientX + "px";
  dragger.style.top = e.clientY + "px";
}
