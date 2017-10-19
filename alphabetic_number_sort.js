/* Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English words for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

input: array of numbers
Output: array of numbers sorted based on the word for each number

Data structure: array of words of number

Primary operations: sort

Algorithm:
  Get array of numbers
  Sort by returning word in word array at index num

*/




function alphabeticNumberSort(numbers) {
  var wordNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  
  return numbers.sort(function(a,b) {
    if (wordNumbers[a] < wordNumbers[b]) {
      return -1;
    } else if (wordNumbers[a] > wordNumbers[b]) {
      return 1; 
    } else {
      return 0;
    };
  });
};



console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]