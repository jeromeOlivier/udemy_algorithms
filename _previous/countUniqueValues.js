/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)
Space Complexity - O(n)
Bonus
You must do this with constant or O(1) space and O(n) time.
*/

// function countUniqueValues(array) {
//   const tail = array.length - 1;
//   let head = 0;
//   while (head <= tail) {
//     if (array[head] === array[head + 1]) {
//       head++;
//     } else {
//       array.push(array[head]);
//       head++;
//     }
//   }
//   const newEnd = array.length;
//   return array.splice(tail + 1, newEnd);
// }

function countUniqueValues(array) {
  if (array.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else {
      ++i;
      array[i] = array[j];
      ++j;
    }
  }
  return i + 1;
}

const myArray = [];

console.log(countUniqueValues(myArray));
