/* 

which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

input: two integers
output: 1 for true, 0 for false

Rules:
  A straight of n same-numbers occurs when there are n of the same number occurring one after the other.
  
  Transform input numbers to strings.
  Hold a number to search for as a straight
  
  Algorithm:
    Iterate over string of num1, if digit at index + 1 and at index + 2 equals digit, assign criterion to num, else return 0
    
    Iterate over string of num2, if digit === criterion and digit at index + 1 === criterion, return 1, else return 0
    
  

*/

function tripledouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  var criterion;
  
  for (var i = 0; i < num1.length; i++) {
    if (num1[i] === num1[i+1] && num1[i+1] === num1[i+2]) {
      criterion = num1[i];
    };
  };
  
  for (var i = 0; i < num2.length; i++) {
    if ((num2[i] === criterion) && (num2[i + 1] === criterion)) {
      return 1;
    };
  };
  
  return 0;
};

console.log(tripledouble(451999277, 41177722899));// == 1 
// num1 has straight triple 999s and 
// num2 has straight double 99s

console.log(tripledouble(1222345, 12345));// == 0 // num1 has straight triple 2s but num2 has only a single 2

console.log(tripledouble(12345, 12345));// == 0

console.log(tripledouble(666789, 12345667));// == 1