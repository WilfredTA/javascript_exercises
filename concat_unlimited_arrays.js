/* This function should concatenate any number of elements into an array.
  Assumption, first argument is always an array

  Algorithm:
  declare concatArray and assign it to a new array that is a copy of the first arg
  iterate over arguments object. For each property value, check if it is array. 
    If it is, push each value of array into concatArray, 
    else push value into concatArray
  return concatArray
*/


function concat(array) {
  var concatArray = array.slice();

  for (value in arguments) {
    if (Array.isArray(arguments[value])) {
      for (index in arguments[value]) {
        concatArray.push(arguments[value][index]);
      }
    } else {
      concatArray.push(arguments[value]);
    }
  }

  console.log(concatArray);
}


concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]);           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
concat([1, 2], "a", ["one", "two"]);               // [ 1, 2, "a", "one", "two" ]
concat([1, 2], ["three"], 4); 