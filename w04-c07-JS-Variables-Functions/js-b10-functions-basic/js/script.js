// In Math:
// f(x) = x + 1

// In JavsScript
function f(x) {
  return x + 1;
}

function getResult() {
  var result = f(4);
  // call the function 'f(x)'
  // and store the return value in the variable 'result'
  console.log( result );
  // this function doesn't have a parameter and return value.
  // but it's still useful because we print out the 'result' in Console window instead.
}



// _____
// More Examples!

function add(a, b) {
  return a + b;
}
// call: add(10, 5);
// and it returns: 15

function subtract(a, b) {
  return a - b;
}
// call: subtract(10, 5)
// and it returns: 5

function multiply(a, b) {
  return a * b;
}
// call: subtract(10, 5)
// and it returns: 50

function getSemesterName( season, year ) {
  return season + " " + year;
}
// call: getSemesterName( Fall, 2018 );
// and it returns: "Fall 2018"



/**  How to define a function!  **/

// 1: no parameter, no return value
function myOwnFunctionName() {
  // a block of code
}

// 2: no parameter, a return value
function myOwnFunctionName() {
  var result = 1 + 2; // for example!
  // a block of code
  return result;
}

// 3: paramters (as many as you want!), no return value
function myOwnFunctionName( parameters ) {
  // a block of code
}

// 4: paramters (as many as you want!), a return value!
function myOwnFunctionName( param1, param2, param3, param4 ) {
  var result = param1 + param2; // for example!
  // a block of code
  return result;
}
