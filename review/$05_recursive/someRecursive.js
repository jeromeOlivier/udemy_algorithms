/*
 Write a recursive function called someRecursive which accepts an array and a
 callback. The function returns true if a single value in the array returns
 true when passed to the callback. Otherwise, it returns false.
 */

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], value => value > 10)); // false


// someRecursive([]) // false
// someRecursive([9]) // true
// someRecursive([8, 9]) // true
// someRecursive([6, 8, 9]) // true
// someRecursive([4, 6, 8, 9]) // true
