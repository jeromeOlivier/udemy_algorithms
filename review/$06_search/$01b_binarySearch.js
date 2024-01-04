function binarySearch(array, target) {
  let headIndex = 0;
  let tailIndex = array.length - 1;
  let midpoint = calcMidpoint(headIndex, tailIndex);
  while (array[midpoint] !== target && headIndex <= tailIndex) {
    if (target < array[midpoint]) {
      tailIndex = midpoint - 1;
    } else {
      headIndex = midpoint + 1;
    }
    midpoint = calcMidpoint(headIndex, tailIndex);
  }
  return array[midpoint] === target ? midpoint : -1;
}

function calcMidpoint(head, tail) {
  return Math.floor((tail + head) / 2);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(nums, 10));
