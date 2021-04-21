"use strict";

/*
n = # of elements in array
+ RUNTIME Complexity: O(n) (if array is sorted) [BST] + O(n^2) [AVG/WST]
+ SPACE Complexity: O(1) [WST]
*/

const insertionSort = arr => {
  for (let j = 0; j < arr.length; j++) {
    arr = insert(arr, j - 1, arr[j]);
  }
  return arr;
}

/* Inserts value into a section of a given array that's already been sorted from array[0] to rightBound 
(and "unsorted" from rightBound + 1 to array.length - 1), then returns array. */
function insert(arr, rB, value) {
  let i;
  for (i = rB; i >= 0 && arr[i] > value; i--) {
    arr[i + 1] = arr[i];
  }
  arr[i + 1] = value;
  return arr;
}

// TESTING:
let unsortedArr = [0, -1, 2, 3, -3, -2, 1, 2];
let sortedArr = [...unsortedArr].sort((a, b) => a - b);
console.log(insertionSort(unsortedArr)); // -> [-3, -2, -1, 0, 1, 2, 2, 3]
