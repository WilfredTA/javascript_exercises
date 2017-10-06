

/* Manual implementation of array shift.
  the shift method mutates an array by removing the first element
  the shift method returns the first element.
  the shift method returns undefined if the array passed to it is empty
  */


function shift(array) {
  if (array.length > 0){
    var deleted = array[0];

    for (var i = 0; i < array.length; i += 1) {
      array[i] = array[i+1];
    }

    array.length = array.length - 1;
    return deleted;

  } else {
    return undefined;
  }
}

a = [ 1, 2, 3, 4 ,5];

console.log(shift(a));
console.log(a);