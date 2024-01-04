/*
 Write a recursive function called capitalizeFirst. Given an array of strings,
 capitalize the first letter of each string in the array.

 capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(array) {
  if (!array.length) return [];
  return [array[0].charAt(0).toUpperCase() + (array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
}


// function capitalizeFirst(array) {
//   return array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }

console.log(capitalizeFirst(['car','taco','banana']))
