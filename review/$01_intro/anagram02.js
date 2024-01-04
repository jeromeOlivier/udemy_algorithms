const isAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (const char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (const char of second) {
    // if the value of any key ever reaches zero, it becomes falsy (!falsy === true)
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
};

const first = "azz";
const second = "zaa";
console.log(isAnagram(first, second));
