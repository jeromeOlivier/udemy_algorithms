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

const findLongestSubstring = (text) => {
    let size = 0;
    let head = 0;
    let tail = 1;
    const set = new Set();
    set.add(text[head]);
    while (tail < text.length) {
        if (!set.has(text[tail])) {
            set.add(text[tail]);
            size = set.size > size ? set.size : size;
            tail++;
        } else {
            set.delete(text[head]);
            head++;
        }
    }
    return size;
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))