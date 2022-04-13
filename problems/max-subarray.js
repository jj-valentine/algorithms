"use strict";

/*
You are given an array of integers with both positive and negative numbers. Write a function to find the maximum sum of all subarrays. 
A subarray is a section of consecutive elements from the original array. The whole array can be considered a sub array of itself.

  EX's:
    maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) → 18 (from [3, 10, -4, 7, 2])
    maxSubarray([15, 20, -5, 10]) → 40
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n ^ 2)
+ SPACE Complexity: O(1)
⇲ note Brute force method -- could be a better way...
*/

const maxSubarray = arr => {
  let max = Math.max();
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = (sum > max ? sum : max);
    }
  }
  return max;
}

// TESTING:
const a1 = [1, -2, 3, 10, -4, 7, 2, -5];
console.log(maxSubarray(a1)); // → 18
const a2 = [15, 20, -5, 10];
console.log(maxSubarray(a2)); // → 40
