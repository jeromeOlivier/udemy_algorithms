// function that returns the first pair of numbers that sum to zero
function sumZero(array) {
  let head = 0;
  let tail = array.length - 1;
  const allNegative = array[head] < 0 && array[tail] < 0;
  const allPositive = array[head] > 0 && array[tail] > 0;

  if (allNegative || allPositive) return false;

  while (head < tail) {
    const sum = array[head] + array[tail];
    if (sum === 0) {
      return [array[head], array[tail]];
    } else if (sum < 0) {
      ++head;
    } else {
      --tail;
    }
  }
  return "sum zero not found";
}

const myArray = [-6, -5, -1, 0, 2, 4, 10, 20];
console.log(sumZero(myArray));
