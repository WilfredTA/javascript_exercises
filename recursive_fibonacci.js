/* 

Write a recursive function that computes the nth Fibonacci number, where nth is an argument to the function.

NOTE: This exercise verges on the Advanced level of exercises, so don't be discouraged if you can't do it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

For fibonacci digit n, n is equal to the fibonacci digit of n-1 + n-2

If n <= 2, then fibonacci n === 1

A fibonacci number is the sum of a series, where this series begins at value 1 and place 3, returning the sum of the preceding two numbers


*/


function fibonacci(digit) {
  if (digit <= 2) {
    return 1;
  } else {
   return fibonacci(digit - 1) + fibonacci(digit - 2); 
    
  }
  
};





console.log(fibonacci(1));   // 1
fibonacci(2)   // 1
fibonacci(3)   // 2
fibonacci(4)   // 3
console.log(fibonacci(5));   // 5
console.log(fibonacci(12));  // 144
console.log(fibonacci(20));  // 6765