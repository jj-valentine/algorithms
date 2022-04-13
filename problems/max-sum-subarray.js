"use strict";

/* 
Given an array of integers,find the maximum possible sum you can get from one of its 
contiguous subarrays. The subarray from which this sum comes must contain at least ONE element.

  EX: 
    let arr = [-2, 2, 5, -11, 6] → maxSumSubarray(arr) = 7
*/


/*
SOLUTION #1
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
⇲ note 
*/

const maxSumSubarray = arr => {
  let subArr = [];
  let max = Number.NEGATIVE_INFINITY, sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= (arr[i] + sum)) {
      subArr = [arr[i]];
      sum = arr[i];
    } else {
      subArr.push(arr[i]);
      sum += arr[i];
    }
    max = Math.max(sum, max);
  }
  return max;
}

/*
SOLUTION #2
n = # of elements in array
+ RUNTIME Complexity: O(n^2) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note 
*/

// const maxSumSubarray = arr => {
//   let max = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < arr.length; i++) {
//     let total = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (total > max) max = total;
//       total += arr[j];
//     }
//   }
//   return max;
// }

console.log(maxSumSubarray([-2, 2, 5, -11, 6, 8]));




