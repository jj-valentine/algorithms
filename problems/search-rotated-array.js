"use strict"; // TAGS:

/*
Given an integer array 'nums' that's sorted in ascending order (with distinct values), and that's also possibly rotated at an unknown pivot index 'k': 
(1 <= k < nums.length) such that the resulting array is '[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]]' (0-indexed),
return the index of the target if it can be located inside of 'nums (OR '-1' if it cannot).

You must write an algorithm with O(log(n)) runtime complexity.

  EX's:
    nums = [4, 5, 6, 7, 0, 1, 2], target = 0 → searchSortedRotatedArray(nums, target) = 4
      EXPLANATION -- [0, 1, 2, 4, 5, 6, 7] was rotated at pivot index '3' and became [4, 5, 6, 7, 0, 1, 2], so the index at which '0' is located is '4'
    
    nums = [4, 5, 6, 7, 0, 1, 2], target = 3 → searchSortedRotatedArray(nums, target) = -1
    
    nums = [1], target = 0 → searchSortedRotatedArray(nums, target) = -1
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const searchSortedRotatedArray = (nums, target) => {

  


  function binarySearch(left, right) {
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let guess = nums[mid];
      if (guess === target) return target;
      else if (guess < target) right = mid - 1;
      else left = mid + 1;
    }
  }

  /* 
    binary search to find offset (and/or target)

    if target is still not found, binary search the other side of 'k' to find target
  */
};

// TESTING:
console.log(searchSortedRotatedArray([4, 5, 6, 7, 0, 1, 2], 0));