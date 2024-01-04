/*
 Sliding Window - findLongestSubstring

 Write a function called findLongestSubstring, which accepts a string and returns
 the length of the longest substring with all distinct characters.

 findLongestSubstring('') // 0
 findLongestSubstring('rithmschool') // 7
 findLongestSubstring('thisisawesome') // 6
 findLongestSubstring('thecatinthehat') // 7
 findLongestSubstring('bbbbbb') // 1
 findLongestSubstring('longestsubstring') // 8
 findLongestSubstring('thisishowwedoit') // 6

 Time Complexity - O(n)
 */

function findLongestSubstring(string) {
  let longest = -Infinity;
  const set = new Set();
  let start = 0;
  let end = 0;
  while (end < string.length) {
    if (set.has(string[end])) {
      set.delete(string[start]);
      start++;
    } else {
      set.add(string[end]);
      longest = Math.max(longest, set.size)
      end++;
    }
  }
  return longest === -Infinity ? 0 : longest;
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))
