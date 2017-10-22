/* 
Write a function that can rotate the last n digits of a number. For the rotation, rotate 1 digit to the left and put the first digit to the right.

Input: A number to be rotated, and a second number representing
       the last n digits of the first number
Output: The first number with its last n digits rotated

Rules/Definitions:
  - Only the last n digits are rotated
  - The first digits (not the last n) remain the same
  - Rotation is:
    - Slicing off the first number in the selection of last n digits
    - appending it to the end of the selection of last n digits
    
Data Structure / Algorithm
  Operations are more conducive to strings than numbers, so will convert the number to a string upon input:
  
  Algorithm:
    First, turn number to string
    Split string into two parts: the numbers to be rotated and those to not be rotated
    Slice the first number of the appropriate subsection and concatenate it to the end of the subsection
    Concatenate the rotated and unrotated number strings into one string
    Return the conversion of num string into number

*/


function rotateRightmostDigits(number, amount) {
  number = String(number);
  var first_part = number.slice(0, number.length - amount);
  var second_part = number.slice(number.length - amount);
  second_part = rotate(second_part);
  
  return Number(first_part.concat(second_part));
  
  
};

function rotate(string) {
  return string.slice(1) + string[0];
  
};

function p(val) {
  console.log(val);
};

//Examples / Test Cases
p(rotateRightmostDigits(735291, 1)); // 735291
p(rotateRightmostDigits(735291, 2)); // 735219
p(rotateRightmostDigits(735291, 3)); // 735912
p(rotateRightmostDigits(735291, 4)); // 732915
p(rotateRightmostDigits(735291, 5)); // 752913
p(rotateRightmostDigits(735291, 6)); // 352917