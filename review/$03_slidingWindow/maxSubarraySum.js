/*
 Sliding Window - maxSubarraySum
 Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a
 subarray with the length of the number passed to the function.
 Note that a subarray must consist of consecutive elements from the original array. In the first example below,
 [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

 maxSubarraySum([100,200,300,400], 2) // 700
 maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
 maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
 maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 maxSubarraySum([2,3], 3) // null

 Constraints:
 Time Complexity - O(N)
 Space Complexity - O(1)
 */

/**
 * Calculates the maximum sum of a subarray within a given range. If the length of the array is less than the range,
 * returns null.
 *
 * @param {Array.<number>} array - The input array.
 * @param {number} range - The size of the subarray range to consider.
 * @return {number|null} - The maximum sum of a subarray within the range, or null if the range is invalid.
 */
function maxSubarraySum(array, range) {
  if (array.length < range) return null; // short circuit
  const initialValue = calculateInitialValue(array, range);
  const max = { value: initialValue };
  const lastSum = { value: initialValue };

  for (let i = 1; i <= array.length - range; i++) {
    const previousValue = array[i - 1];
    const newValue = array[range + (i - 1)];
    const currentSum = lastSum.value - previousValue + newValue;
    lastSum.value = currentSum;
    if (currentSum > max.value) {
      max.value = currentSum;
    }
  }
  return max.value;
}

/**
 * Calculates the initial value by summing the numbers of the array within the specified range.
 * @param {Array.<number>} array - The array containing numbers to be summed.
 * @param {number} range - The number of elements to include in the sum.
 * @return {number} - The calculated initial value.
 */
function calculateInitialValue(array, range) {
  const initial = { value: 0 };
  for (let i = 0; i < range; i++) {
    initial.value += array[i];
  }
  return initial.value;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
