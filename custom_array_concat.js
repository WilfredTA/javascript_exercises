/*

The first argument is an array. For simplicity, you can assume that this will always be the case.
The concatenation returns a new array
Follow the order of passing of the array arguments
Copy object references from the source arrays to the new array; 
	if you make a change to a reference object in one of the source arrays after calling concat, those changes should show up in the output array as well.
For strings, numbers, and booleans the concatenation copies the values


	Approach:

	declare concatArray to a copy of first arg (which is an array)
	Check if second argument is an array.
		if it is, iterate through it, pushing its values to the concatArray
		else, just push value to concatArray
	return concatArray
*/


function concat(array, someValue) {
	var concatArray = array.slice();

	if (Array.isArray(someValue)) {
		for (val in someValue) {
			concatArray.push(someValue[val]);
		}
	} else {
		concatArray.push(someValue)
	}

	return concatArray;
}

var obj = { a: 2, b: 3 };

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];	
							 // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
var arr3 = concat(arr1, arr2);
arr3[5]['c'] = 19;
console.log(arr3);


