function insertionSort(arr) {
    let i = 1;

    while (i < arr.length) {
        let insertValue = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > insertValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = insertValue;
        i++;
    }
    return arr;
}

console.log(insertionSort([6, 4, 5, 1, 2, 3]));