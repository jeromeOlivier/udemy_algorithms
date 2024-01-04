function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(i, j);
      if (array[j] > array[j + 1]) {
        noSwaps = false;
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

const myArray = [1, 5, 4, 2];
bubbleSort(myArray);
