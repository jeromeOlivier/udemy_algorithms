/*
 Multiple Pointers - averagePair
 Write a function called averagePair. Given a sorted array of integers and a
 target average, determine if there is a pair of values in the array where the
 average of the pair equals the target average. There may be more than one pair
 that matches the average target.

 Bonus Constraints:
 Time: O(N)
 Space: O(1)

 Sample Input:
 averagePair([1,2,3],2.5) // true
 averagePair([1,3,3,5,6,7,10,12,19],8) // true
 averagePair([-1,0,3,4,5,6], 4.1) // false
 averagePair([],4) // false
 */

/*
looking for 8
1 19 = 20 / 2 = 10
1 12 = 13 / 2 = 6.5
3 12 = 15 / 2 = 7.5
5 12 = 17 / 2 = 8.5
5 10 = 15 / 2 = 7.5
6 10 = 16 / 2 = 8 bingo
 */

function calculateAverage(a, b) {
  return (a + b) / 2;
}

function averagePair(array, desiredAverage) {
  if (array.length < 2) return false;
  let upperIndex = array.length - 1;
  let lowerIndex = 0;
  while (upperIndex > lowerIndex) {
    const currentAverage = calculateAverage(array[lowerIndex], array[upperIndex]);
    if (currentAverage < desiredAverage) {
      lowerIndex++;
    } else if (currentAverage > desiredAverage) {
      upperIndex--;
    } else if (currentAverage === desiredAverage) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));
