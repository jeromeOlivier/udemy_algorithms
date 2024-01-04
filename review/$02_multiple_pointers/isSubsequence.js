/*
 Multiple Pointers - isSubsequence
 Write a function called isSubsequence which takes in two strings and checks
 whether the characters in the first string form a subsequence of the characters
 in the second string. In other words, the function should check whether the
 characters in the first string appear somewhere in the second string, without
 their order changing.

 Examples:

 isSubsequence('hello', 'hello world'); // true
 isSubsequence('sing', 'sting'); // true
 isSubsequence('abc', 'abracadabra'); // true
 isSubsequence('abc', 'acb'); // false (order matters)

 Your solution MUST have AT LEAST the following complexities:

 Time Complexity - O(N + M)
 Space Complexity - O(1)
 */

function isSubsequence(targetSequence, sequencePool) {
  const targetLength = targetSequence.length;
  const poolLength = sequencePool.length;
  if (targetLength > poolLength) {
    return false;
  }
  let targetIndex = 0;
  let poolIndex = 0;
  while (targetIndex < targetLength && poolIndex < poolLength) {
    if (targetSequence[targetIndex] === sequencePool[poolIndex]) {
      targetIndex++;
      poolIndex++;
      if (targetIndex === targetLength) {
        return true;
      }
    } else {
      poolIndex++;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));



