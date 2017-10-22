/* 
  Maximum rotation
  
  input: integer
  Output: maximum rotation of integer
  
  Rules/definitions:
    - starting at the first index of the number, rotate it to the left
    - Then, rotate the number to the left from the element at second index up to the element at last index. The element at first index is untouched
    - Continue to do this for each number in the input number
    - Return the resultant rotated number
    
    Break it down:
      level 1: iteration across each digit in num
      level 2: selection of digits from certain index to end of number
      level 3: rotation of those digits
      level 4: rejoining of those digits to original digits
      
      
    Algorithm:
      Convert digits to string.
      
      for each digit in index:
        store already rotated digits as digit at first index to digit next up in rotation
        store to-be-rotated as digit at the current index to the end of the digits string
        store the result of rotating the to-be-rotated slice of string
        concatenate the already rotated to the to-be-rotated and store this result
        repeat operation on the newly stored result
        Repeat until every digit is included in already-rotated
*/

function maxRotation(number) {
  number = String(number);
  var rotated;
  var already_rotated;
  var max_rotation = number;
  
  for (var i = 0; i < number.length; i++) {
    already_rotated = max_rotation.slice(0, number.length - (number.length - i));
    
   
  
    rotated = max_rotation.slice(i);

    rotated = rotate(rotated);
    max_rotation = already_rotated.concat(rotated);
  };
  
  return max_rotation;
  
};


function rotateRightmostDigits(number, amount) {
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
p(maxRotation(735291));        // 321579
p(maxRotation(3));             // 3
p(maxRotation(35));            // 53
p(maxRotation(8703529146));    // 7321609845