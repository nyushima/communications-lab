var answer = confirm( "Would you like to have a red box?" );
console.log( answer );


if (answer == true) {
  document.getElementById('color-box').style.backgroundColor = "red";
}
