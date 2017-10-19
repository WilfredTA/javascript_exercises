/* Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

input: integer with at least 2 digits (assumption)
output: The sum of the digits

Data Structure (and rules/definitions):
  Digits is a collection of numbers. Summing a collection is an example of reduction, which is a list processing abstraction. Therefore an array is the most logical data structure to represent these digits
  
  Primary operations:
    1. Operation x on number, where x transforms num into list of digits
    2. Operation reduction on list of digits, where reduction will sum those digits
    
    Operation x could be accomplished mathematically, but my first implementation will merely turn the number into a string that I can then split into characters
    
  Algorithm making use of string:
    Transform number into string
    Split string into an array of characters
    Reduce the array of characters by summing the result of
      adding Number(char)

*/

// Solved with turning number into string
function sum(number) {
  var digits = String(number).match(/./g);
  
  return digits.reduce(function(total, char) {
    return total += Number(char);
  }, 0);
  
};



// Solved using math and recursion
function summer(number) {
  if (number % 10 === 0) {
    if ((number / 10) <= 10){
      return number / 10;
    } else {
      return summer(number / 10);
    };
  } else {
    return summer(number - (number % 10)) + (number % 10);
  };
};



console.log(summer(23));          // 5
console.log(summer(496));         // 19
console.log(summer(123456789));   // 45