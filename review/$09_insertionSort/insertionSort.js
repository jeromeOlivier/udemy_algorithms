/*
 function insertionSort(arr) {
 let i = 1;
 while (i < arr.length) {
 if (arr[i] < arr[i - 1]) {
 for (let j = i - 1; j >= 0; j--) {
 if (arr[j] < arr[i]) {
 [arr[j], arr[i]] = [arr[i], arr[j]]
 }
 i++;
 }
 }
 i++;
 }
 return arr;
 }
 */

// function insertionSort(arr) {
//     let i = 1;
//     while (i < arr.length) {
//         let valueToInsert = arr[i];
//         let j = i - 1;
//
//         while (j >= 0 && arr[j] > valueToInsert) {
//             arr[j + 1] = arr[j];
//             console.log(`${ valueToInsert } [${ arr }]`);
//             j--;
//         }
//
//         arr[j + 1] = valueToInsert;
//         console.log(`${ valueToInsert } [${ arr }]`);
//         i++;
//     }
//     return arr;
// }

function insertionSort(arr) {
    let i = 1;
    
    while (i < arr.length) {
        const insertVal = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > insertVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = insertVal;
        i++;
    }
    return arr;
}

console.log(insertionSort([6, 4, 5, 1, 2, 3]));