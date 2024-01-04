const isAnagram = (first, second) => {
  // are both words of equal length?
  if (first.length !== second.length) {
    return false;
  }
  const firstObj = {};
  const secondObj = {};
  // save the letter frequency for each word in an object {letter: frequency, ...}
  for (const char of first) {
    firstObj[char] = (firstObj[char] || 0) + 1;
  }
  for (const char of second) {
    secondObj[char] = (secondObj[char] || 0) + 1;
  }
  // deconstruct the key value pairs for each entry of the firstObj
  for (const [key, value] of Object.entries(firstObj)) {
    console.log(key, value);
    // are the values of each key the same?
    if (value !== secondObj[key]) {
      return false;
    }
  }
  return true;
};

const first = 'azz';
const second = 'zza';


console.log(isAnagram(first, second));