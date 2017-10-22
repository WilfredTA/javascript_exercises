/* 

Write a function that returns a list of all substrings of a string that start at the beginning of the original string. It returns the substrings arranged from shortest to longest.

Input: String
Output: array of sub strings

Rules/definitions:
  A sub string starts with the first letter of the string
  Each substring progreessively adds one more letter to it
  Substrings are sorted by length
  
  Data structure: array of characters
  
  Algorithm:
    Transform array by transforming each element into a sub array of strings that is a "slice" of array from index 0 to index of current element. Call join on each of these sub arrays
*/

function substringsAtStart(string) {
  var chars = string.match(/./g);
  
 return chars.map(function(char, index) {
    return chars.slice(0, index + 1).join('');
  });
  
};

console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
console.log(substringsAtStart('a'));     // ['a']
console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']