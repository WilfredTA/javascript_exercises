/*

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

Input: string consisting of braces, brackets, or parentheses
Output: boolean

Rules: 
  - For any opening symbol, there must be a corresponding closing symbol somewhere in the string
  - For any opening symbol, it must be followed by the corresponding closing symbol or another opening symbol
  - The first half of the string must close in the opposite order as the second half of the string for any unclosed braces
  - Every string will have at least one pair of immediate couples ( '{}' or '[]' or '{}')
  
  
  Algorithm: 
   Recursively remove immediate couples from string, returning false if the called string does not contain any pairs of immediate couples

*/

function validBraces(string) {
  
 var new_string = string.replace(/\[\]/g, '');

 new_string = new_string.replace(/\(\)/g, '');

 new_string = new_string.replace(/\{\}/g, '');

  
   if (!string.match(/\{\}/g) &&
      !string.match(/\(\)/g) &&
      !string.match(/\[\]/g)) {
        return false;
    } else if (new_string.length > 0) {
        return validBraces(new_string);
  };
  
  
  return true;
}

// Examples/ Test Cases

console.log(validBraces("[({})](]"));// =>  False
console.log(validBraces("({[]})[]")); //true
console.log(validBraces("(){}[]"));//   =>  True
console.log(validBraces("([{}])"));//   =>  True
console.log(validBraces("(}"));//       =>  False
console.log(validBraces("[(])"));//     =>  False