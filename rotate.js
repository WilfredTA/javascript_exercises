/* 
Write a function that rotates an array by 
moving the first element to the end of the array. 
Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array as well.

Input: array
Output: a different array which is a copy of the input array
        but with the first element moved to the end of the array

Algorithm:
    Copy array input
    Delete item at index 0 and capture value
    Push item to array
    return array

*/

function rotateArray(array) {
    if (Array.isArray(array)) {
      if(array.length === 0) {
        return [];
      } else {
        var rotated = array.slice();
        var rotated_element = rotated.shift();
        rotated.push(rotated_element);
        return rotated;
      }
    } else {
        return undefined;
    }
}

function p(value) {
    console.log(value);
}




p(rotateArray([7, 3, 5, 2, 9, 1]));   // [3, 5, 2, 9, 1, 7]
p(rotateArray(['a', 'b', 'c']));      // ['b', 'c', 'a']
p(rotateArray(['a']));                // ['a']
p(rotateArray([1, 'a', 3, 'c']));    // [ 'a', 3, 'c', 1 ]
p(rotateArray([{a: 2}, [1, 2], 3])); // [ [1, 2], 3, {a: 2} ]
p(rotateArray([]));                   // []

// return undefined if the argument is not an array
rotateArray();                    // undefined
rotateArray(1);                   // undefined


// the input array is not mutated
var x = [1, 2, 3, 4];
rotateArray(x);                  // [2, 3, 4, 1]
console.log(x);                  // [1, 2, 3, 4]