/*
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 Your solution MUST have the following complexities:
 Time: O(N)

 Sample Input:

 sameFrequency(182,281) // true
 sameFrequency(34,14) // false
 sameFrequency(3589578, 5879385) // true
 sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2){
  const one = num1.toString();
  const two = num2.toString();
  const lookup = {};
  for (const digit of one) {
    lookup[digit] = (lookup[digit] || 0) + 1;
  }
  for (const digit of two) {
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(123,321));
