var vid = document.getElementById('myVideo');

window.onload = function() {
  adjustVideoSize();
}

window.onresize = function() {
  adjustVideoSize();
}

function adjustVideoSize() {
  // check the dementions of the video clip
  // 4:3? 16:9?
  if (window.innerWidth/window.innerHeight >= 16/9) {
    vid.width = window.innerWidth;
    vid.height = window.innerWidth * 9/16;
  } else {
    vid.width = window.innerHeight * 16/9;
    vid.height = window.innerHeight;
  }
}
