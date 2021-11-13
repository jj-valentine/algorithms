"use strict"; // TAGS: Array, Subarray, Contiguous, Positive Integers, Smallest Size, Sum, Sliding Window, Difficulty: Easy/Medium

/* 
Given an array of positive numbers and a positive number 's', find the length of the smallest contiguous 
subarray whose sum is greater than or equal to 's'. Return '0' if no such subarray exists

  EX's:
    arr = [2, 1, 5, 2, 3, 2], s = 7 → smallestSubarrayForGivenSum(arr, s) = 2
      EXPLANATION -- smallest subarray with a sum greater than or equal to '7' is [5, 2] → length = 2

    arr = [2, 1, 5, 2, 8], s = 7 → smallestSubarrayForGivenSum(arr, s) = 1
      EXPLANATION -- smallest subarray with a sum greater than or equal to '7' is [5, 2] → length = 1
    
    arr = [3, 4, 1, 1, 6], s = 8 → smallestSubarrayForGivenSum(arr, s) = 3
      EXPLANATION -- smallest subarrays with a sum greater than or equal to '7' are [3, 4, 1] and [1, 1, 6] → length = 3
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n + n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Using the "Sliding Window" pattern, in this solution we occasionally parse over groups of elements 
a second time before incrementing 'windowEnd' but never more than twice -- hence, the O(n + n) time complexity.
*/

const smallestSubarrayForGivenSum = (arr, s) => {
  let windowStart = 0, currSum = 0, smallestWindow = arr.length + 1;
  for (let windowEnd = 0; windowEnd < arr.length; currSum >= s ? windowEnd : windowEnd + 1) {
    if (currSum < s) currSum += arr[windowEnd];
    else {
      smallestWindow = Math.min(windowEnd - windowStart + 1, smallestWindow);
      currSum -= arr[windowStart++];
    }
  }
  return smallestWindow < arr.length + 1 ? smallestWindow : 0;
}

// TESTING:
console.log(smallestSubarrayForGivenSum([2, 1, 5, 2, 3, 2], 7)); // Expect: 2
console.log(smallestSubarrayForGivenSum([2, 1, 5, 2, 8], 7)); // Expect: 1
console.log(smallestSubarrayForGivenSum([3, 4, 1, 1, 6], 8)); // Expect: 3