// write a function that compares two arrays and returns true is the arrays are
// the same and false if they are not.

// function same(array1, array2) {
//   // if the length of the arrays are not the same, return false
//   if (array1.length !== array2.length) return false;
//   // using a for of loop, generate an object with keys based on the values of the
//   // array and values based on the number of times the value appears in the array
//   const obj1 = {};
//   for (let i of array1) {
//     obj1[i] = obj1[i] ? obj1[i] += 1 : 1;
//   }
//   const obj2 = {};
//   for (let i of array2) {
//     obj2[i] = obj2[i] ? obj2[i] += 1 : 1;
//   }
//   // loop through the object and compare the values
//   for (let i in obj1) {
//     if (obj1[i] !== obj2[i ** 2]) return false;
//   }
//   return true;
// }

// are both arrays the same length?
// are the frequencies the same?


const same = (array1, array2) => {
  // are both arrays the same length?
  if (array1.length !== array2.length) {
    return false;
  }
  // create two objects
  const obj1 = {};
  const obj2 = {};
  // iterate through both arrays and establish the frequency of each item
  for (let a of array1) {
    obj1[a] = obj1[a] ? obj1[a] += 1 : 1;
  }
  for (let a of array2) {
    obj2[a] = obj2[a] ? obj2[a] += 1 : 1;
  }
  for (let k in obj1) {
    if (obj1[k] !== obj2[k ** 2]) {
      return false;
    }
  }
  return true;
}

const array1 = [1, 2, 3, 2];
const array2 = [1, 4, 9, 4];
console.log(same(array1, array2));
