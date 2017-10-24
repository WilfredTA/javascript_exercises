
/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
*/

function digitalRoot(number) {
  var numbers = String(number);
  var new_num;

  if (numbers.length <= 1) {
    return Number(numbers);
  } else {
   new_num = numbers.match(/./g).map(function(digit) {return             Number(digit)}).reduce(function(sum, digit) {                      return sum + digit;
    });
    return digitalRoot(new_num);
  };
};

console.log(digitalRoot(16)); //7
console.log(digitalRoot(26)); //8
console.log(digitalRoot(166)); //4
console.log(digitalRoot(200)); //2
console.log(digitalRoot(29)); //2
console.log(digitalRoot(15)); //6