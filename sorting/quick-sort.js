"use strict";

// ☞ TODO: get V2's ("partioning") code running...
/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n·log(n)) [BST/AVG] / O(n²) [WST]
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
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n²) [WST] / O(n) [BST/AVG] (i.e. "Non-Deterministic" Pivot)
+ SPACE Complexity: O(1)
NOTE: Implement 'Quickselect' -- "Randomized"/"Non-Deterministic" version of 'Quicksort' (i.e. utilizing randomly generated pivot points + "Lomuto's" OR "Hoare's" partitioning)...
*/

const quickSortV2 = arr => {
 
}

// function kthLargestInArray(arr, k) {
//   const n = arr.length;
//   let left = 0;
//   let right = n - 1;

//   while (left <= right) {
//     const choosenPivotIndex = getRandomInt(left, right);

//     const finalIndexOfChoosenPivot = partition(arr, left, right, choosenPivotIndex);
//     // What does the 'finalIndexOfChoosenPivot' tell us?
    
//     if (finalIndexOfChoosenPivot == n - k) {
//         /*
//          * Found. The pivot is index on index n - k. This is literally its final
//          * position if the array we were given had been sorted. See how we saved work?
//          * We don't need to sort the whole array
//          */
//       return arr[finalIndexOfChoosenPivot];
//     } else if (finalIndexOfChoosenPivot > n - k) {
//         /*
//          * k'th largest must be in the left partition. We "overshot" and need to go left
//          * (and we do this by narrowing the right bound)
//          */
//       right = finalIndexOfChoosenPivot - 1;
//     } else {
//         /*
//          * finalIndexOfChoosenPivot < n - k
//          * 
//          * k'th largest must be in the right partition. We "undershot" and need to go
//          * right (and we do this by narrowing the left bound)
//          */
//       left = finalIndexOfChoosenPivot + 1;
//     }
//   }

//   return -1;
// }


// const partition = (arr, left, right, pivotIndex) => {
//   const pivotValue = arr[pivotIndex];
//   let lesserItemsTailIndex = left;
  
//      /*
//      * Move the item at the 'pivotIndex' OUT OF THE WAY. We are about to bulldoze
//      * through the partitioning space and we don't want it in the way
//      */

//   swap(arr, pivotIndex, right);

//   for (let i = left; i < right; i++) {
//     if (arr[i] < pivotValue) {
//       swap(arr, i, lesserItemsTailIndex);
//       lesserItemsTailIndex++;
//     }
//   }
//      /*
//      * Ok...partitioning is done. Swap the pivot item BACK into the space we just
//      * partitioned at the 'lesserItemsTailIndex'...that's where the pivot item
//      * belongs
//      * 
//      * In the middle of the "sandwich".
//      */

//   swap(arr, right, lesserItemsTailIndex);

//   return lesserItemsTailIndex;
// }


// const swap = (arr, first, second) => {
//   const temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// }

// // Inclusive of both bounds
// const getRandomInt = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// TESTING:
console.log(quickSortV2([3, 6, 2, 1, 5, 4]));