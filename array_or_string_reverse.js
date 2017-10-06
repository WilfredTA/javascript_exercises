/* Input is array or string
  Output is a new array or string in reversed order
  Algorithm/Approach:
    Declare a reversedItem.
    If input is array, set reversed item to empty array
    Else set to empty string
    initialize counter that is equal to 0
    Iterate backwards in arg, setting element at counter in reversedItem
    equal to element at index in iterator
    Return reversedItem
  */

  function reverse(input) {
    var reversedItem = '';
    var counter = 0;

    if (Array.isArray(input)) {
      reversedItem = [];
      for (var i = input.length - 1; i >= 0; i -= 1) {
      reversedItem[counter] = input[i];
      counter += 1;
      }

    } else {
      for (var i = input.length - 1; i >= 0; i -= 1) {
        reversedItem += input[i];
      }
    }


    console.log(reversedItem);

  }

reverse('Hello');          // olleH
reverse('a');
reverse([1, 2, 3, 4]);     // [4, 3, 2, 1]
reverse([]);                 // a
           // []