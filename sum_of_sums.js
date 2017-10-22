/* 

Write a function that takes an array of numbers and then returns the sum of sums of each leading subsequence of that array.

You may assume that the array always contains at least one number.

E.g.:

sumOfSums([3, 5, 2]) -> 3 + (3+5) + (3+5+2) = 21

Primary operation(s): reduction - getting one value out of an array of values

Approach:
  Transform array into array of arrays with leading subsequences.
  Reduce subsequences and then reduce the outer array.
  

*/


function sumOfSums(array) {
 return array.map(function(element, index) {
    return array.slice(0, index + 1).reduce(function(sum, num) {
      return sum + num;
     });
  }).reduce(function(sum, num) {
      return sum + num;
   
 });
};

console.log(sumOfSums([3,5, 2])); // 21
console.log(sumOfSums([1,5,7,3])); //36