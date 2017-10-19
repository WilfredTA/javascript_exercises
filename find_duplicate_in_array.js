/* Write a function that takes an array of numbers as input
  And returns the duplicate number as output.
  
  Input: array of numbers
  Output: one number
  
  Rules: There will always be exactly one number value that occurs twice.
 
  Primary abstract operation(s):
    1. The function is supposed to find some subset of elements in the
      set of all elements in the array. This is the use case for               filtration.
      
      High level approach:
        Get input array
        Filter out all non duplicate values
        Return the value of non-filtered elements (which will be the same since there will always be exactly one number value that is repeated)
    
    Data Structure:
      Input is array, will leave the array as the data structure to work with since JS possesses a higher order function Array.prototype.filter

  Algorithm:
    Call filter on array
    Pass a function that checks for duplicates by seeing if some other
    element in the array from element index + 1 to end equals the element 
    value
    Return the first element in the return value of filter
    
  */


function findDuplicate(array) {
  return array.filter(function(number, index) {
    return array.slice(index+1).some(function(num) {
      return num === number;
    });
  })[0];
};

console.log(findDuplicate([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
         7,  34, 57, 74, 45, 11, 88, 67,  5, 58]));