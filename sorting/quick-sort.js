"use strict";

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n*log(n)) [BST/AVG] / O(n^2) [WST]
+ SPACE Complexity: O(log(n)) [BST] / O(n) [WST]
 NOTE:  Speed with which "Quick Sort" is executed depends on the pivot element that we choose
*/

const quickSort = arr => {
  if (arr.length < 2) return arr;
  else {
    let pivot = arr[0];
    let less = [], more = [];
    for (let i = 1; i < arr.length; i++) {
      let n = arr[i]
      if (n <= pivot) less.push(n);
      else if (n > pivot) more.push(n);
    }
    return quickSort(less).concat(pivot).concat(quickSort(more));
  }
};

/*
☞ TODO: get this version's code running...
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n^2) [WST] + O(n*log(n)) [BST/AVG] (i.e. "Non-Deterministic" Pivot)
+ SPACE Complexity: 
⇲ note "Randomized"/"Non-Deterministic" version of 'Quicksort' (i.e. utilizing randomly generated pivot points + "Lomuto's" partitioning)
*/

const quickSortV2 = arr => {
  partitionSubarray(arr, 0, arr.length - 1);
  return arr;

  function partitionSubarray(arr, start, end) {
    /* "LEAF WORKER" tasks (i.e. sub-problem = 1 or 0) */
    if (start >= end) return;
    /* "INTERNAL NODE WORKER" tasks (i.e. sub-problem >= 2) */
    
    let smaller = start, pivot = Math.floor((Math.random() * (end - start + 1)) + min);
    [arr[start], arr[pivot]] = [arr[pivot], arr[start]];
    for (let bigger = start + 1; bigger <= end; bigger++) { // "Lomuto's" partioning...
      if (arr[bigger] < arr[start]) {
        smaller++;
        [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
      }
    }

    [arr[start], arr[smaller]] = [arr[smaller], arr[start]];

    partitionSubarray(arr, start, smaller - 1);
    partitionSubarray(arr, smaller + 1, end)
  }
}


// TESTING:
console.log(quickSortV2([3, 6, 2, 1, 5, 4]));