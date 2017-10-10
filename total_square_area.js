/* Write a function whose input is an array of arrays.
	Each sub array has two elements, representing width and height.
	The function should output the sum of the areas of each array.

	Steps:
		Transform array into a one-dimensional array in which
		each element is the area of the array. Return transformation.

		Reduce the elements within the transformed array by summing them
*/

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
   var new_array = rectangles.map(function(measures) {
    return measures[0] * measures[1];
  });
  
  return new_array.reduce(function(sum, current) {
    return sum += current;
  });
};



/* Now, write a function that does the above, but only for squares
	
	Steps: 
		Input: two dimensional array
		Filter to only include sub arrays that represent squares
		Pass filtered array into totalArea

*/

function totalSquareArea(rectangles) {
	var squares = rectangles.filter(function(subarray) {
		return subarray[0] === subarray[1];
	});

	return totalArea(squares);
}

console.log(totalSquareArea(rectangles));
