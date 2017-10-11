/* Function takes two arguments, a word and an array of words.

  Function returns all words in array that are anagrams of
  the word in argument.
  
  Returns empty array if no anagrams are found
  
  Operations:
    Filter
    Anagram test
      - checks if all elements are the same
        - break comparators into arrays
        - interrogate arrays (JS provides Array.prototype.every())
    
  Anagram: A word that has the same exact letters as another
          word, but arranged in a different order.
  
  */


function anagram(word, list) {
 return list.filter(function(possibleAna) {
   return areAnagrams(word, possibleAna);
 });
  
}

function areAnagrams(criterion, test) {
 var criterionLetters = criterion.split('').sort();
 var testLetters = test.split('').sort();
 return compareArrays(criterionLetters, testLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  return array1.every(function(letter, index) {
    return letter === array2[index];
  });
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));