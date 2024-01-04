function stringSearch(source, target) {
  let count = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target[0]) {
      for (let j = 0; j < target.length; j++) {
        if (source[i + j] !== target[j]) {
          break;
        }
        count = (j === (target.length - 1)) ? ++count : count;
      }
    }
  }
  return count;
}

const source = 'hello, my name is jerome';
const target = 'me';
console.log(stringSearch(source, target));
