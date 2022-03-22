#!/usr/local/bin/node 

"use strict"; // TAGS: Sorting, Brute Force, Minimum Swap, Selection

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n^2) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: 'Brute Force' approach to sorting...
*/

const selectionSort = arr => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = findMinimumIdx(arr, i, n);
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  function findMinimumIdx(arr, start = 0, end) {
    let min = Infinity, minIdx = -1;
    for (let i = start; i < end; i++) {
      let el = arr[i]
      if (el < min) {
        min = el;
        minIdx = i;
      }
    }

    return minIdx;
  }

  return arr;
};

// TESTING:
console.log(selectionSort([4, 7, 2, 1, 3, 5, 6])); // Expect: [1, 2, 3, 4, 5, 6, 7]