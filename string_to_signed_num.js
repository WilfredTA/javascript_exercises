function stringToInteger(string) {
  var arrayOfIntegers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var chars = string.split('');
  var number = 0;
  var nthPlace = string.length - 1;
  var base = 10;

  for (idx in chars) {
    number += arrayOfIntegers[chars[idx]] * (base**nthPlace);
    nthPlace -= 1;
  }

 
  return number;
}

function stringToSignedNum(string) {
  var sign;
  var newString;
  var usedNum;

  /* Extract sign from string and remove from string */
  if (string[0] === '-' || '+') {
    sign = string[0];
    newString = string.replace(/[+-]/, '')
  }

  /* Get unsigned version of number */
  usedNum = stringToInteger(newString);

  /* If sign was negative, multiply unsigned num by -1 */
  if (sign === '-') {
    usedNum *= -1;
  }

  return usedNum;

}

console.log(stringToSignedNum('-4321'));          // -4321
console.log(stringToSignedNum('+570')); 