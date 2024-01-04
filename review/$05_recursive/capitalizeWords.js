function capitalizeWords(array) {
  if (!array.length) return [];
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(words));
