/* 
given a string of space separated numbers, and have to return the highest and lowest number.

Notes: 
  All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/



function highAndLow(string) {
  var array = string.split(' '); // Split
  var max;
  var min;

  for (var i = 0; i < array.length; i += 1) { // Convert items to nums
    array[i] = parseInt(array[i], 10);
  }

  min = array[0];
  max = array[0];

  for (var i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  return String(max) + ' ' + String(min);

}