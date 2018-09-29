//declare and initialize our list just like any other variable
var helloList = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Hej",
  "Ahoj",
  "Xin chao",
  "Jambo",
  "Zdravstvuyte",
  "Ni hao"
];

//declare and initialize our counter
var counter = 0;

//this is the function that swaps out text
function rotate() {
  //display the text in the index currently called by the counter
  document.getElementById("helloText").innerHTML = helloList[counter];

  //if the counter is greater than the number of things in the array, reset to 0, otherwise add 1
  if (counter >= helloList.length - 1) {
    counter = 0;
  } else {
    counter = counter + 1;
  }
}

//function to add whatever is in the input box to our list
function addToList() {
  var t = document.getElementById("toAdd").value;
  helloList.push(t);
}
