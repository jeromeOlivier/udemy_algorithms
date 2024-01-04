const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let index = 0;
  let sweep = 1;
  let count = 1;
  while (sweep < arr.length) {
    if (arr[index] !== arr[sweep]) {
      count++;
      index = sweep;
      sweep++;
    } else {
      sweep++;
    }
  }
  return count;
};

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5]));
console.log(countUniqueValues([1, 1, 1, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3]));
console.log(countUniqueValues([1]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
