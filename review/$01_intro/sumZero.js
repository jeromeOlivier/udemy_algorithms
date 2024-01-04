const sumZero = (numbers) => {
  // set head and tail of numbers array
  let head = 0;
  let tail = numbers.length - 1;
  // head and tail will move towards each other
  while (head < tail) {
    // check sum
    const sum = numbers[head] + numbers[tail];
    if (sum > 0) {
      // if more than zero, tail is too big
      --tail;
    } else if (sum < 0) {
      // if more than zero, head is too small
      ++head;
    } else {
      return [numbers[head], numbers[tail]];
    }
  }
};

const numbers = [-5, -3, -2, 0, 2, 4, 6];
console.log(sumZero(numbers));
