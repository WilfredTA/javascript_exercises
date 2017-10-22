/* Rotate array by 90 degrees

   Input: array of arrays
   Output: array of arrays where each sub array has been "rotated" by 90 degrees
   
   Rules/Definitions:
    Rotate - Creating a new array of arrays that appears as if the input array has been rotated 90 degrees clockwise
    
    Characteristics of rotation:
      - For however many rows are in the input array, there will be that many columns in the output array
      - For however many columns in the input array, there will be that many rows in the output array
      
      - Reversal of the order of the sub arrays.
      - Transpose: For index i of each sub array, all elements at index i of each sub array are placed into a single sub array
      
      
      
*/

function rotate90(matrix) {
  matrix = matrix.reverse();
  
  return matrix[0].map(function(element, index) {
    return matrix.map(function(sub_array) {
      return sub_array[index];
      
    });
    
  });
};




var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]


var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]