
/* 
  Determine sign of number input
  Remove sign
  Get string of num
  Re-apply sign

*/

function numberToString(num) {
  var charNums = ['0', '1', '2', '3', '4', '5', '6' , '7', '8', '9'];

  var stringNum = '';
  var remainder;

  do {
    remainder = num % 10;
    num = Math.floor(num / 10);

    stringNum = charNums[remainder] + stringNum;
  } while (num > 0);

  return stringNum;
}

function signedNumToString(num) {
  var sign;
  var stringNum;

  if (num < 0) {
    sign = '-';
    num *= -1;
  } else if (num > 0) {
    sign = '+';
  } else {
    sign = '';
  }

  stringNum = numberToString(num);

  stringNum = sign + stringNum;

  return stringNum;

}

console.log(signedNumToString(4321));

console.log(signedNumToString(-4321));

console.log(signedNumToString(0));