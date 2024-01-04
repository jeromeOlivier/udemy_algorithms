function maxSubArraySum(array, num) {
  const stop = array.length - num;
  let max = 0;
  let current = 0;

  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  current = max;

  for (let i = 0; i < stop; i++) {
    current = current - array[i] + array[i + num];
    if (current > max) {
      max = current;
    }
  }
  return max;
}

const myArray = [1, 2, 3, 4, 5, 6, 7];

console.log(maxSubArraySum(myArray, 3));
