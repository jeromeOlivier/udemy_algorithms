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
    if (text.length === 0) return 0;
    if (text.length === 1) return 1;

    let longest = -Infinity;
    let start = 0;
    let end = 1;
    let set = new Set([text[0]]);

    while (end < text.length) {
        if (set.has(text[end])) {
            set.delete(text[start]);
            set.add(text[end])
            start++;
            end++;
        } else {
            set.add(text[end]);
            longest = Math.max(longest, set.size);
            end++;
        }
    }
    return longest;
}

console.log(findLongestSubstring('rithmschool'));

const system = [
  'boo = 5 + far + 2',
  'far = foo + bar',
  'foo = 11',
  'bar = foo + 7',
];

function solveEquation(v) {
  return v.reduce((accumulator, current) => {
    accumulator += current;
    return accumulator;
  }, 0);
}

function solve(system) {
  const obj = {};
  for (let i = 0; i < system.length; i++) {
    const [key, value] = system[i].split("=");
    const k = key.trim();
    const v = value.trim().split(" + ");
    obj[k] = v;
  }

  for (let [k, v] of Object.entries(obj)) {
    console.log(v, solveEquation(v));
    // return v = solveEquation(v);
  }


  console.log(obj);
  return obj;
}

const result = solve(system);
console.log(result);


const system = [
  'boo = 5 + far + 2',
  'far = foo + bar',
  'foo = 11',
  'bar = foo + 7',
];

// output:
// {
//  foo: 11,
//  bar: 18,
//  boo: 36,
//  far: 29,
// };


// console.log(obj);