/* 
Write a function that takes a sentence string as input and returns a new string that contains the original string with any sequence of the words 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' converted to a string of digits.

rules:
  Words with punctuation are replaced, but punctuation remains.

Input: String
Output: String with all worded numbers converted to digits

Data Structure:
  Hash table to match string digits to string numbers
  
  Algorithm:
    Iterate over hash table keys, forming a matching pattern with the number strings
    For each key, form the matching pattern and replace any matches in the input sentence with the result of lookup in the hash table
    return final sentence
    
*/

function wordToDigit(string) {
  var word_digits = {
    'zero' : '0',
    'one' : '1',
    'two' : '2',
    'three' : '3',
    'four' : '4',
    'five' : '5',
    'six' : '6',
    'seven' : '7',
    'eight' : '8',
    'nine' : '9',
  };
  var regexp;
  
  Object.keys(word_digits).forEach(function(word_num) {
    regexp = new RegExp(word_num, 'g');
    string = string.replace(regexp, word_digits[word_num]);
    
  });
  return string;
};

// Examples / Test Cases

console.log(wordToDigit('Please call me at four five five five one two three four. Thanks.'));
//'Please call me at 5 5 5 1 2 3 4. Thanks.'