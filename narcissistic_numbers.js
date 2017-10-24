/* 
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.


Your code must return true or false depending upon whether the given number is a Narcissistic number.

1364 is a narcissistic number:
    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634


Rules: A number is narcissistic if:
  each of its digits raised to the power of (number length) added together === the number
  
  Need:
    Number length
    split number into digits
    raise each digit to the power of number length
    sum those numbers
    
Data structure:
  Reduction and transformation suggests an array
  
  Algorithm:
    Get number
    Split number into an array of digits
    Store length of array as var power
    transform digits by raising each to value of power var
    sum array
    compare summed value to input
    
*/

function narcissistic( value ) {
  var new_value = String(value).split('').map(function(digit) {
    return Number(digit);
  });
  var power = new_value.length;
  
  return new_value.map(function(number) {
    return Math.pow(number, power);
  }).reduce(function(sum, num) {
    return sum + num
  }) === value;

};

console.log(narcissistic(1634)); //true
console.log(narcissistic(1364)); // false
