'use strict';


/*
n = # of elements in array
[WST] RUNTIME Complexity: O(n)
[AVG/WST] RUNTIME Complexity: O(n^2)
[WST] SPACE Complexity: O(1)
NOTE:
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

const sortedArr = [7, 8, 9, 10, 11]
const unsortedArr = [3, 1, 0, 2, -1, 2, -3, -2];
console.log(bubbleSort(sortedArr)); // -> [-3, -2, -1, 0, 1, 2, 2, 3]
