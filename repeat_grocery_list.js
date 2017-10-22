/* 
Write a function which takes a grocery list (array) of 
fruits with quantities and converts it into an array 
of the correct number of each fruit.

Input: an array of arrays, where each sub
      array has a string and an integer
Output: an array of strings
  - The strings are the strings of the sub array
    Strings are repeated integer times (where the integer is from
    same sub array)

  Primary operation: reduction and transformation

  Algorithm:
    Transform array by iterating over each sub array and
    return string integer times
    Reduce array by concatenating all sub arrays into single array
    Return reduced array
*/

function buyFruit(arrays) {
  return arrays.map(function(subarr) {
    return repeat(subarr);
  }).reduce(function(list, subarr) {
    return list.concat(subarr)
  })
};

function repeat(array) {
  var list = [];

  for (var i = 1; i <= array[1]; i++) {
    list.push(array[0]);
  };
  return list
};
// Example
console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));

/* result
['apples', 'apples', 'apples', 'orange', 'bananas','bananas']
*/