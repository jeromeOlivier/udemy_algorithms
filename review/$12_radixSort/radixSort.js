function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function countNumberOfDigits(num) {
    return num.toString().length;
}

function mostDigits(array) {
    let largestNumber = -Infinity;
    array.forEach(number => largestNumber = Math.max(number, largestNumber));
    return countNumberOfDigits(largestNumber);
}

function radixSort(array) {
    const loopCount = mostDigits(array);
    for (let k = 0; k < loopCount; k++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            let digit = getDigit(array[i], k);
            buckets[digit].push(array[i]);
        }
        array = [].concat(...buckets);
    }
    return array;
}

console.log(getDigit(123, 12));
console.log(countNumberOfDigits(123));
console.log(radixSort([457, 2345, 1234, 225, 754, 12, 456, 775, 856, 2594, 1235, 786, 656]));
