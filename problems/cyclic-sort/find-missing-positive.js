"use strict"; // «TAGS» Array, Unsorted, Smallest, Missing, Positive Integer, Linear Time, Constant Space, LeetCode: #41, Difficulty: Hard, Companies: Amazon, Apple, Facebook, Google, Microsoft, Snap

/*
Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space

  EX's:
    arr = [1, 2, 0] → findMissingPositive(arr) = 3

    arr = [3, 4, -1, 1] → findMissingPositive(arr) = 2

    arr = [7, 8, 9, 11, 12] → findMissingPositive(arr) = 1
*/

/*
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Employ "Cyclic Sort" approach/pattern...
*/

const findMissingPositive = arr => {
  let i = 0, n = arr.length;
  while (i < n) {
    let idx = arr[i] - 1;
    if (arr[i] <= 0 || arr[i] > n + 1) i++;
    else if (arr[i] !== arr[idx]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    else i++;
  }

  for (var j = 1; j < n; j++) {
    if (arr[j - 1] !== j) return j;
  }

  return j;
};

// TESTING:
console.log(findMissingPositive([1, 2, 0])); // Expect: 3
console.log(findMissingPositive([3, 4, -1, 1])); // Expect: 2
console.log(findMissingPositive([7, 8, 9, 11, 12])); // Expect: 1