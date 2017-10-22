/* 
  Write a function that takes a 3 X 3 matrix in Array of Arrays 
  format and returns the transpose of the original matrix (i.e. columns become rows and rows become columns)
  
  Rules/Definitions: Primary operation is transformation
         The array will always be an array of 3 nested arrays
         Respective indices at each sub array will become the 
         elements of the new array:
         [[index0, index0, index0],
          [index1, index1, index1],
          [index2, index2, index2]]
          
  Priamry operation: transformation... Transform outer array by transforming each inner array as well
          
  Data Structure and Algorithm:
    map over first sub array, turning each element into an array of all elements at index of element in sub array
    Return result

*/


function transpose(array) {
  
 return array[0].map(function(item, index) {
    return array.map(function(subarr) {
      return subarr[index];
    });
  });
  
};
            
  var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var newMatrix = transpose(matrix)

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]