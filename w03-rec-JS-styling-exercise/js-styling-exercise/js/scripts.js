function showBox1() {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
}

function showBox2() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "block";
}

function changeCaption() {
  document.getElementById("caption").innerHTML = "This is a LARGE caption!";
  document.getElementById("caption").style.border = "3px solid red";
  document.getElementById("caption").style.color = "red";
  document.getElementById("caption").style.fontSize = "20px";
  document.getElementById("caption").style.padding = "20px";
}
