"use strict;"

/* 
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’

  EX's:
    arr = [2, 1, 5, 1, 3, 2], k = 3 → maxSumOfSubarraySizeK(arr, k) = 9
    Explanation -- [5, 1, 3] → 5 + 1 + 3 = 9

    arr = [2, 3, 4, 1, 5], k = 2 → maxSumOfSubarraySizeK(arr, k) = 7
    Explanation -- [3, 4] → 3 + 4 = 7 
*/

/*
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: "Sliding Window" pattern allows us to bypass the brute force approach of iterating through each subarray of 'k' elements, 
which would give us a time complexity of O(n * k)
*/

const maxSumOfSubarraySizeK = (arr, k) => {
  let windowStart = 0, currSum = 0, maxSum = Number.NEGATIVE_INFINITY;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (currSum > maxSum) maxSum = currSum;
      currSum -= arr[windowStart++];
    }
  }
  return maxSum;
};

// TESTING:
// console.log(maxSumOfSubarraySizeK());