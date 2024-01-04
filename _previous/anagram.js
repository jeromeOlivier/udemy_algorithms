function isAnagram(str1, str2) {
  const strObj1 = {};
  const strObj2 = {};
  for (let char of str1) {
    strObj1[char] = strObj1[char] ? strObj1[char] += 1 : 1;
  }
  for (let char of str2) {
    strObj2[char] = strObj2[char] ? strObj2[char] += 1 : 1;
  }
  for (let char in strObj1) {
    if (strObj1[char] !== strObj2[char]) return false;
  }
  return true;
}

const str1 = 'anagram';
const str2 = 'nagaram';
console.log(isAnagram(str1, str2));
