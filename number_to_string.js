/* 
Input: A number object
Output: a string representation of number.
Rules: Cannot use explicit or implicit type coercion.
Assumption: input is always a whole number greater than or equal to 0

Approach:
	Get remainder of num / 10 to get the right most digit.
	Then, chop of right most digit with floor operation
	repeat step 1 as long as the num arg > 0
	
*/


function numberToString(num) {
	var charNums = ['0', '1', '2', '3', '4', '5', '6' , '7', '8', '9'];

	var stringNum = '';
	var remainder;

	do {
		remainder = num % 10;
		num = Math.floor(num / 10);

		stringNum = charNums[remainder] + stringNum;
	} while (num > 0);

	return stringNum;
}

console.log(numberToString(4321));