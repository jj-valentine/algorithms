"use strict";

/*
Given an array of integers, find the highest product you can get from three of the integers.
*/


/*
SOLUTION #1
RUNTIME Complexity: O()
SPACE Complexity: O()
⇲ note
*/

function highestProduct(arr, end = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length < 3) return 0
  const sorted = arr.sort((a, b) => a - b);
  return Math.max(sorted[0] * sorted[1] * sorted[end], sorted[end - 2] * sorted[end - 1] * sorted[end]);
}

/*
SOLUTION #2
RUNTIME COMPLEXITY: O()
SPACE Complexity: O()
⇲ note
*/

function highestProductV2(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0
  const sorted = arr.sort((a, b) => a - b);
  const end = arr.length - 1;
  // first two NEGATIVE numbers, and highest POSTIVE number
  let case1 = sorted[0] * sorted[1] * sorted[end];
  // last three POSITIVE numbers in array
  let case2 = sorted[end - 2] * sorted[end - 1] * sorted[end];
  return Math.max(case1, case2);
}


// TESTING:
console.log('highestProduct (not array):', highestProduct("NOT an Array")); // -> 0
console.log('highestProduct (less than 3 elements):', ([1, 2])) // -> 0
console.log('highestProduct:', ([-5, -4, 1, 2, 3, 4])) // -> 80
