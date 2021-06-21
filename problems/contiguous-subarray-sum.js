"use strict"; // TAGS: Subarray, Sum, Contiguous, Hash, Prefix, Difficulty: Medium

/*
Given an array of numbers, return 'true' if there is a subarray that sums up to a certain number 'k'
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(2n) → O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: To avoid brute-forcing a solution (with time complexity O(n^2)) by iterating over each and every contiguous 
subarray starting with that starts with a given element in the array, we can create a hash map of prefix sums and 
then iterate over said hash map and check if the sum 'k' exists OR if the difference between a given prefix sum 
and 'k' exists (this indicates that a contiguous subarray exists somewhere AFTER a sum ≥ 'k' exists in the array).
*/

const contiguousSubarraySum = (arr, k) => {
  let sums = {};
  arr.reduce((currentSum, n) => {
    currentSum += n;
    sums[currentSum] = true;
    return currentSum;
  }, 0);

  return Object.keys(sums).some(sum => sums[k] || sums[sum - k]);
};

// TESTING:
console.log(contiguousSubarraySum([5 , 3, 6, 2, 1, 3, 2], 8));