// function binarySearch(array, searchItem) {
//   let found = false;
//   while (!found) {
//     const midPoint = Math.floor(array.length / 2);
//     if (searchItem === array[midPoint]) {
//       return originalArray.indexOf(searchItem);
//     } else if (searchItem > array[midPoint]) {
//       array.splice(array[midPoint], array[array.length - 1]);
//     } else {
//       array.splice(array[0], array[midPoint]);
//     }
//   }
//   return -1;
// }

function binarySearch(array, searchItem) {
  let head = 0;
  let tail = array.length - 1;
  let mid = Math.floor(array.length / 2);
  // avoid loop if searchItem is outside sorted array's scope
  if (searchItem < array[head] || searchItem > array[tail]) return -1;
  while (array[mid] !== searchItem && head < tail) {
    if (searchItem < array[mid]) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
    mid = Math.floor((head + tail) / 2);
  }
  return array[mid] === searchItem ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14], 7));
