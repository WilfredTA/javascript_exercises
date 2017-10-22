/* 
Write a function that returns a list of 
all substrings of a string that are palindromic. 
That is, each substring must consist of the 
same sequence of characters forwards as it does backwards.
 Arrange the return values in the same sequence as the 
 substrings appear in the string. 
 Include duplicate palindromes multiple times.

You may (and should) use the substrings 
function you wrote in the previous exercise.

For the purposes of this exercise, you should consider all 
characters and pay attention to case; 
that is, "AbcbA" is a palindrome, 
but neither "Abcba" nor "Abc-bA" are. 

In addition, assume that single characters are not palindromes.

Input: string
Output: array of substrings where substring is a palindrome

Rules/Definitions:
  - A palindrome is any string that reads the same forward
    as it does backward.
      - It is at least 2 letters long
      - It is case sensitive (Ab !== aB)
  - Palindromes in the output array should appear in the order they
    appear in the string


Algorithm:
  Get all substrings in string
  Filter out non-palindromic words

*/


function palindromes(string) {
  return substrings(string).filter(function(string) {
    if (string.length > 1) {
      return string === string.split('').reverse().join('');
    } else {
      return false;
    }
  });

};

function substringsAtStart(full_string) {
  var chars = full_string.match(/./g);
  
 return chars.map(function(char, index) {
    return chars.slice(0, index + 1).join('');
  });
  
};

function substrings(starting_string) {
  var chars = starting_string.match(/./g);
  var substrings = [];
  
  for (var i = 0; i < chars.length; i++) {
    substrings.push(substringsAtStart(chars.slice(i, chars.length + 1).join('')));
  };
  
  return flatten(substrings);
};

function flatten(array) {
  var flattened = [];

  array.forEach(function(sub_arr) {
    sub_arr.forEach(function(el) {
      flattened.push(el);
    });
  });

  return flattened;
};



// Examples/test cases

console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // ['madam', 'ada']
console.log(palindromes('hello-madam-did-madam-goodbye'));
/* result
[ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo' ]
  */

console.log(palindromes('knitting cassettes'));
/* result
[ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]
*/