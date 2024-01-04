/*
 Sliding Window - minSubArrayLen
 Write a function called minSubArrayLen which accepts two parameters - an array
 of positive integers and a positive integer.
 This function should return the minimal length of a contiguous subarray of which
 the sum is greater than or equal to the integer passed to the function. If there
 isn't one, return 0 instead.

 Examples:
 minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

 Time Complexity - O(n)
 Space Complexity - O(1)
 */
/*
function minSubArrayLen(array, target) {
  if (array.length === 0 || target <= 0) {
    return 0;
  }
  const endPoint = array.length;
  let leftIndex = 0;
  let headIndex = 0;
  let subArrayLength = Infinity;
  let subArrayTotal = 0;
  while (leftIndex < endPoint) {
    if (subArrayTotal >= target) {
      subArrayLength = Math.min(subArrayLength, headIndex - leftIndex);
      subArrayTotal -= array[leftIndex];
      leftIndex++;
    } else if (subArrayTotal < target && headIndex < endPoint) {
      subArrayTotal += array[headIndex];
      headIndex++;
    } else {
      break;
    }
  }
  return subArrayLength === Infinity ? 0 : subArrayLength;
}
*/

function minSubArrayLen(array, target) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < array.length) {
    if (total < target && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
