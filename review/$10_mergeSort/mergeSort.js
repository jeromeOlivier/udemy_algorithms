function merge(firstArray, secondArray) {
    const resultArray = [];
    let i = 0;
    let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            resultArray.push(firstArray[i]);
            i++;
        } else {
            resultArray.push(secondArray[j]);
            j++;
        }
    }

    while (i < firstArray.length) {
        resultArray.push(firstArray[i]);
        i++;
    }

    while (j < secondArray.length) {
        resultArray.push(secondArray[j]);
        j++;
    }

    return resultArray;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const midpoint = Math.floor(array.length / 2);
    const head = mergeSort(array.slice(0, midpoint));
    const tail = mergeSort(array.slice(midpoint));
    merge(head, tail);
}

console.log(mergeSort([10, 50, 20, 40]));
