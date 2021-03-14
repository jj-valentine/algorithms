"use strict;"

/* 
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

  EX's:
    arr = [2, 3, 3, 3, 6, 9, 9] → removeDuplicates(arr) = 4
    Explanation: the first four elements after removing the duplicates will be [2, 3, 6, 9]

    arr = [2, 2, 2, 11] → removeDuplicates(arr) = 2
    Explanation: the first two elements after removing the duplicates will be [2, 11]
*/

/*
SOLUTION #1
n = # of elements in input
+ RUNTIME Complexity: O(n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Use 'Two Pointer' approach: When two adjacent elements are found to be equal to each other, 
assing the first element in the array to the index of the first pointer and then shift off the first element
in the array. If the two elements aren't equal, shift both pointers to the right.
*/

const removeDuplicates = arr => {
  if (arr.length === 1) return arr;
  let left = 0, right = 1;
  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[left] === arr[right]) {
      arr[left] = arr[0];
      arr.shift();
    } else {
      left++;
      right++;
    }
  }
  return arr.length;
};

// TESTING:
console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // Expect: 4
console.log(removeDuplicates([2, 2, 2, 11])); // Expect: 2
