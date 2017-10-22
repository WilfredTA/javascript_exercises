/* 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.

Rules:
  Words separated by single spaces
  Index is 0 based and the beginning of each word starts at index 0
  Ignore non alphanumeric chars
  

Input: string
Output: string with even indexed chars upper cased, odd indexed chars lower case

Algorithm:
  Split string into words separated by spaces
  For each word, transform word by upcasing all even chars and downcasing odd chars
  Return the result of joining the array
*/

function toWeirdCase(string){
 var words = string.split(' ');
  
  return words.map(function(word) {
    return changeCase(word);
  }).join(' ');
  
}

function changeCase(word) {
  var new_word_chars = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].match(/[a-zA-Z0-9]/)) {
      if (i % 2 === 0) {
        new_word_chars.push(word[i].toUpperCase());
      } else {
        new_word_chars.push(word[i].toLowerCase());
      };
    };
  };
    
    return new_word_chars.join('');
  
};
console.log(toWeirdCase('This is a test'));