"use strict"; // TAGS: Array, Subarray, Contiguous, Prefix Sum, Difference, Target, Cache (i.e. Hash Table), Frequency, LC: #560 (Medium), Companies: Amazon, Apple, Facebook, Google, Microsoft, Salesforce, Snap, Spotify, Tesla, Uber

/* 
Given an array of integers and a target integer value 'k', find the total number of continuous subarrays whose elements sum to equal 'k'.
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: As we iterate through the array, we can maintain a reference to an updated "prefix sum" (i.e. sum of all elements preceding and including the current element),
while we simultaneously build out a "seen before" cache (i.e. 'Hash Table') which stores the current sums as keys, and the number of times we've used that sum to "trace" a new
subarray whose elements add up to 'k' as their values. 
*/

const subarraySum = (arr, k) => {
  let sum = 0, subarrays = 0;
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const diffWithK = sum - k;
    if ( diffWithK === 0) subarrays++;
    if (seen[diffWithK] !== undefined) subarrays += seen[diffWithK];
    seen[sum] = (seen[sum] || 0) + 1;
  }
  return subarrays;
}

// TESTING: 
console.log(subarraySum([1, -1, 0], 0)); // Expect: 3
// console.log(subarraySum([1, 1, 2, 2, 3, 3, 4, 5, 6, 6], 6)); // Expect: 4
// console.log(subarraySum([1, 1, 2, 2, 3, 3, -2, -3, 6], 6)); // Expect: 5
// console.log(subarraySum([1, 2, 3, 1, 2, -3, 3], 6)); // Expect: 5