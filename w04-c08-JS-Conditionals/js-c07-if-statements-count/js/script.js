var count = 0;


function countToTen() {
  count++; // count = count + 1;
  document.getElementById('count-value').innerHTML = count;

  var box = document.getElementById('color-box');
  if ( count == 10 ) {
    box.style.backgroundColor = "red";
    count = 0;
    // let's change the box color to red and then reset the count value to 0.
  } else {
    box.style.backgroundColor = "yellow";
  }
}
