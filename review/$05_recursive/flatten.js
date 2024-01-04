/*
 Write a recursive function called flatten which accepts an array of arrays and
 returns a new array with all values flattened.

 flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 flatten([[1],[2],[3]]) // [1,2,3]
 flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

function flatten(array) {
  if (!array.length) return [];
  if (Array.isArray(array[0])) {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  } else {
    return [array[0]].concat(flatten(array.slice(1)));
  }
}

console.log(flatten([1, 2, 3, [4, 5]]));
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1], [2], [3]]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));