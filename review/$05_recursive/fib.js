/*
 Write a recursive function called fib which accepts a number and returns the
 nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
 sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
 where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(4));