function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = Infinity;
    let index;
    let sorted = true;
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        sorted = false;
        smallest = array[j];
        index = j;
      }
    }
    if (smallest !== array[i]) {
      console.log(i);
      let temp = array[i];
      array[i] = smallest;
      array[index] = temp;
    }
  }
  return array;
}

const myArray = [1, 7, 3, 4, 5, 6];
console.log(selectionSort(myArray));
