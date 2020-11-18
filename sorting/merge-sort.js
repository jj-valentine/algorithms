"use strict";


/*
RUNTIME Complexity: O()
SPACE Complexity: O()
NOTE:
*/

/* Takes in an array that has two sorted subarrays,
from [a, ..., b] and [b + 1, ..., c], and merges the arrays into a single sorted subarray */
const merge = (arr, a, b, c) => {

}

// Takes in an array and recursively merge sorts it
const mergeSort = (arr, a, c) => {
    if (a < c) {
        let b = Math.floor((c + a) / 2);
        console.log(a, b, c);
        mergeSort(arr, 0, b);
        console.log("asfasdfasfasfsaf")
        mergeSort(arr, b + 1, c);
        // merge(array, p, q, r);
    }
    return arr;
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
console.log(mergeSort(array, 0, array.length - 1));
