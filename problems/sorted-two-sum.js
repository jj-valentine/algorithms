"use strict"; // TAGS: Array, Sorted, Index, Sum, Difference, Hash Table, Cache, Linear Scan/Runtime Complexity, Constant Space Complexity LC: #167 (Medium), IK: Sorting, Companies: Amazon, Apple, Google, Microsoft 

/*
Given a '1-indexed' array of integers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. 
Let these two numbers be 'n₁' @ index 'i₁' and 'n₂' @ index 'i₂', where 1 <= i₁ < i₂ <= n (length of input array).

Return the indices of the two numbers (added by one) in the following format (i.e. for 'n₁' @ index 'i₁' and 'n₂' @ index 'i₂'): '[i₁, i₂]'

NOTE: Contraints
  i) The tests are generated such that there is exactly ONE solution
  ii) You may not use the same element twice
  iii) our solution must use only constant extra space.
*/

/*
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'Two Pointer' approach...
*/

const sortedTwoSum = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--; 
  } 

  return [-1, -1];
};

// TESTING:
console.log(sortedTwoSum([2, 7, 11, 15], 9)); // Expect → [1, 2]
console.log(sortedTwoSum([2, 3, 4], 6)); // Expect → [1, 3]
console.log(sortedTwoSum([3, 4, 7, 12, 15, 18], 11)); // Expect → [2, 3]
