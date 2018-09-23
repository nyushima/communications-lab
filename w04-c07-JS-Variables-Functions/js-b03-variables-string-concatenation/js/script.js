
var numA = 1;
var numB = 2;
var textA = "ABCD";
var textB = "EFG";

// number + number
var resultA = numA + numB;
console.log( "ResultA =" );
console.log( resultA );

// string + string
var resultB = textA + textB;
console.log( "ResultB =" );
console.log( resultB );

// number + string
var resultC = numA + textB;
console.log( "ResultC =" );
console.log( resultC );

// string + number
var resultD = textA + numB;
console.log( "ResultD =" );
console.log( resultD );

// number + number + string
var resultE = numA + numB + textB; // (number + number) + string
console.log( "ResultE =" );
console.log( resultE );

// string + number + number
var resultF = textA + numA + numB; // (string + number) + number
console.log( "ResultF =" );
console.log( resultF );

// number + string + number
var resultG = numA + textA + numB;
console.log( "ResultG =" );
console.log( resultG );

// number + string(space) + number
var resultH = numA + " " + numB;
console.log( "ResultH =" );
console.log( resultH );
