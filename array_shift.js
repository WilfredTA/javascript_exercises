/* Manual implementation of array shift.
	the shift method mutates an array by removing the first element
	the shift method returns the first element.
	the shift method returns undefined if the array passed to it is empty
	*/


function shift(array) {
	var deleted = delete array[0];
	console.log(deleted);
}

shift([1, 2, 3]);   