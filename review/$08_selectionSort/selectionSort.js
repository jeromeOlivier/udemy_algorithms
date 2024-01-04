function selectionSort(arr) {
    let i = 0;
    while (i <= arr.length) {
        let min = i;
        let j = i;
        while (j < arr.length) {
            if (arr[j + 1] < arr[min]) {
                min = j + 1;
            }
            j++;
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
            i++;
        } else {
            return arr;
        }
    }
    return arr;
}

console.log(selectionSort([6, 8, 4, 5, 9, 1, 2, 7, 3]));