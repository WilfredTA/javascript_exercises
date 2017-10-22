/* 
Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers between the elements of the two arrays. Sort the results in increasing value.

Input: two arrays
Output: A single array that is the product of the two arrays

Data structure: single array

Primary operations: iteration, multiplication

Algorithm:
  Get two arrays
  Iterate over first array. For each element in first array, multiply it by each element in the second array, and store the result of each multiplication in a new array
  Sort array
  return array
  
  
  */


function multiplyAllPairs(array1, array2) {
  var products = [];
  
  array1.forEach(function(num) {
    array2.forEach(function(second_num) {
      products.push(num*second_num);
    });
  });
  
  products.sort(function(a,b) {
    if (a<b) {
      return -1;
    } else if (a > b) {
      return 1;
    };
  });
  
  console.log(products);
  
};


multiplyAllPairs([2, 4], [4, 3, 1, 2]);
