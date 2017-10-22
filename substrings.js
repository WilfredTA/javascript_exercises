/* 

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

Notes: Returns all substrings of string
       Substrings that start with lower indices precede higher indices.
       Order substrings from shortest to longest
       
Input: string
Output: array of substrings

  What is the function doing:
    It is iterating through each character, listing all substrings that start with that character.
    For each character, list that character concatenated with char at index + 1, then index + 2, up to index final index

  Algorithm:
    Given input string, begin a loop over a list of the characters.
    Get chars in string from current index of for loop to final index, joined into a string
    Pass that string into substringsAtStart
    Capture value of substringsAtStart in an array of all substrings
    Flatten array of substrings

  
*/

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

console.log(substrings('abcde'));
/* result should be:
[ 'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e' ]
  */