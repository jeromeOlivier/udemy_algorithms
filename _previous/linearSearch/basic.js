function linearSearch(array, searchItem) {
  for (let item of array) {
    if (item === searchItem) {
      return array.indexOf(item);
    }
  };
  return -1;
}

const myArray = [10, 2, 3, 4, 6, 7, 8, 11];
console.log(linearSearch(myArray, 8));
