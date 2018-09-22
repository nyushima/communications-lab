var answer = true;
if ( answer ) {
  console.log( "1: Yes." );
}
if ( answer == true ) {
  console.log( "1: Yes!!" );
}


var buttonClicked = true;
if ( buttonClicked == false) {
  console.log( "2: Button is not clicked yet." );
} else {
  console.log( "2: Button is clicked!" );
}


if ( 10 == 3 + 8 ) {
  console.log( "3: Correct!" );
} else {
  console.log( "3: Wrong!" );
}


var x = 10;
if ( x > 0 && x < 100 ) {
  console.log( "4: x is between 0 and 100!" );
} else {
  console.log( "4: x is not in the range between 0 and 100!" );
}


var width = 100;
var height = 200;
if ( width >= 200 && height >= 200 ) {
  console.log( "5: Big enough!" );
}


var person = "Nimrah";
if ( person == "Ann" || person == "Rune" ) {
  console.log( '6: Say "Hi!!"' );
} else if ( person == "Nimrah" || person == "Moon" ) {
  console.log( '6: Say "Hi-five!"' );
} else {
  console.log( "6: (I don't know you...)" );
}


var currentTime = 10;
if ( currentTime >= 8 && currentTime < 12 ) {
  console.log( "7: Good Morning!" );
} else if ( currentTime >= 12 && currentTime < 17 ) {
  console.log( "7: Good Afternoon!" );
} else if ( currentTime >= 17 && currentTime < 20 ) {
  console.log( "7: Good Evening!" );
} else if ( currentTime >= 20 && currentTime < 24 ) {
  console.log( "7: Good Night!" );
} else {
  console.log( "7: (zzz....)" );
}
