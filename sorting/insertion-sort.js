"use strict";

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) (if array is sorted) [BST] + O(n^2) [AVG/WST]
+ SPACE Complexity: O(1) [WST]
NOTE: 'Brute Force' sorting approach... 
*/

const insertionSort = arr => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    arr = insert(arr, i);
  }

  /* inserts value at 'from' index in appropriate slot by "shifting" elements to the right */
  function insert(arr, from) {
    const toInsert = arr[from];
    for (var j = from; j > 0 && arr[j - 1] > toInsert; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = toInsert;
    return arr;
  }
  
  return arr;
};

// TESTING:
console.log(insertionSort([4, 7, 2, 1, 3, 5, 6])); // Expect: [1, 2, 3, 4, 5, 6, 7]