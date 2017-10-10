/* Write a function that takes a number string in base 10
  as an argument and outputs the numbre converted to base 10.
  
  Steps:
    1. Split the input text into an array of digits
    2.  Transform array of digits into digits multipled by powers of (eight ^ index).
    3. Reduce these digits
    */

function octalToDecimal(numberString) {
  var digits = numberString.split('').map(function(char, index, array) {
    var power = numberString.length - (index + 1);
    return Number(char) * (Math.pow(8, power));
  });
  
  return digits.reduce(function(sum, num) {
    return sum += num;
  });
  
}


console.log(octalToDecimal('233')); // 155
console.log(octalToDecimal('1')); //1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); //9
