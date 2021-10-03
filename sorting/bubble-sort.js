"use strict";

/*
n = # of integers in array
+ RUNTIME Complexity: O(n) [WST] / O(n^2) [AVG/WST] 
SPACE Complexity: O(1) [WST] 
*/

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let bigger;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        bigger = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = bigger;
      }
    }
  // if (bigger === undefined) return arr;
  }
  return arr;
}

// TESTING:
console.log(bubbleSort([3, 1, 0, 2, -1, 2, -3, -2])); // Expect: [-3, -2, -1, 0, 1, 2, 2, 3]
