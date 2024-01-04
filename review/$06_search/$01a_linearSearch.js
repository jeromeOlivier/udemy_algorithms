function linearSearch(array, searchItem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchItem) {
      return i
    }
  }
  return -1;
}

