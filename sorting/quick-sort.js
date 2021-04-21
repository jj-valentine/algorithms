"use strict";

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n*log(n)) [BST/AVG] + O(n^2) [WST]
+ SPACE Complexity: O(log(n)) [BST] + O(n) [WST]
NOTE: Speed with which quickSort is executed depends on the pivot element that we choose
*/

function quickSort(arr) {
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
}

// TESTING:
console.log(quickSort([3, 6, 2, 1, 5, 4]));