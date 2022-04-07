"use strict"; // TAGS: Array, Sorting (Or NOT), Index, Sum, Difference, Hash Table, Cache, Linear Scan/Runtime Complexity, LC: #1 (Easy), IK: Sorting, Companies: Amazon, Apple, Facebook, Google, Microsoft, Salesforce, Spotify, Uber

/*
Given an array of numbers and a target value, return an array of the indices (in any order) of the two values from the array that sum up to the given target number.
If more than one solution exists, return either solution. No single index can be used more than once. If a solution does not exist, return '[-1, -1]'.
*/

/*
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: 'Hash Table' + 'Linear Scan'...
*/

const twoSum = (arr, target) => {
  const diffs = {};
  for (let i = 0; i < arr.length; i++) {
    let currDiff = target - arr[i];
    if (diffs[currDiff] !== undefined) return [diffs[currDiff], i];
    diffs[arr[i]] = i;
  }

  return [-1, -1];
};

// TESTING:
console.log(twoSum([9, -3, 2, -1, 0, 5, 120, -121], 120)); // Expect → [4, 6]
