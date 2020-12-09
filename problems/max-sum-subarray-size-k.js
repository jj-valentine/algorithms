"use strict;"

/*
n = # of elements in input
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Sliding Window Pattern allows us to bypass brute force approach with O(n * k) time complexity
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