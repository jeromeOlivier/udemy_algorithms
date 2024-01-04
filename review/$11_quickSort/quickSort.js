function pivot(array, startIndex = 0, endIndex = array.length - 1) {
    const swap = (arr, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    let pivot = array[startIndex];
    let swapIndex = startIndex;

    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array, startIndex, swapIndex);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

console.log(quickSort([5, 8, 3, 2, 1, 9, 7, 6, 4]));
