function stringToInteger(string) {
  var arrayOfIntegers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var chars = string.split('');
  var number = 0;
  var nthPlace = string.length - 1;
  var base = 10;

  for (idx in chars) {
    number += arrayOfIntegers[chars[idx]] * (base**nthPlace);
    nthPlace -= 1;
  }

 
  console.log(number);
}

stringToInteger('4321');          // 4321
stringToInteger('570'); 