var count = 0;
var pResult = document.getElementById('result');


function addOne() {

  count++;  // count = count + 1;

  pResult.innerHTML = count;
  console.log( "count: " + count );
}


function addTen() {

  count += 10;  // count = count + 10;

  pResult.innerHTML = count;
  console.log( "count: " + count );
}


function subtractOne() {

  count--;  // count = count - 1;

  pResult.innerHTML = count;
  console.log( "count: " + count );
}


function subtractFive() {

  count -= 5;  // count = count - 5;

  pResult.innerHTML = count;
  console.log( "count: " + count );
}
