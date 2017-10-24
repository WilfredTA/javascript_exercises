/* 

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

Input: string
Output: sorted string

Rules:
  Each word in string is separated by a space
  Each word in string has a number in it
  Words in string are sorted based on the number that is embedded within them

Data structure: 
  array of words
  
  algorithm:
    get input string, split into an array of words
    Sort array by extracting the number embedded in the string
    Return the result of joining the sorted array back into a string


*/

function order(words){
  var words = words.split(' ');
  return words.sort(function(a,b) {
    if (Number(a[a.search(/[1-9]/)]) < Number(b[b.search(/[1-9]/)])) {
        return -1;
    } else {
        return 1;
    };
  }).join(' ');
}

var str = "4of Fo1r pe6ople g3ood th5e the2";
console.log(order(str));