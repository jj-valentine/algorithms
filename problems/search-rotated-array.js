"use strict"; // TAGS: Array, Sorted, Binary Search, Target, Pivot, LeetCode: #33, Difficulty: Medium, Companies: Amazon, Apple, Facebook, LinkedIn, Microsoft, Uber

/*
Given an integer array 'nums' that's sorted in ascending order (with distinct values), and that's also possibly rotated at an unknown pivot index 'k': 
('1' <= 'k' < 'nums.length') such that the resulting array is '[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]]' (0-indexed),
return the index of the target if it can be located inside of 'nums (or '-1' if it cannot).

Your algorithm must run in O(log(n)) time.

  EX's:
    nums = [4, 5, 6, 7, 0, 1, 2], target = 0 → searchSortedRotatedArray(nums, target) = 4
      EXPLANATION -- [0, 1, 2, 4, 5, 6, 7] was rotated at pivot index '3' and became [4, 5, 6, 7, 0, 1, 2], so the index at which '0' is located is '4'
    
    nums = [4, 5, 6, 7, 0, 1, 2], target = 3 → searchSortedRotatedArray(nums, target) = -1
    
    nums = [1], target = 0 → searchSortedRotatedArray(nums, target) = -1
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(2*log(n)) → O(log(n)) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Our approach is straightforward: Use a (slightly modified) binary search algorithm to search for the "pivot" index in the array 
(i.e. the index at which the array has been "rotated" or "shifted"). Then, depending on the value of our target integer relative to the 
first integer in the array, we decide which side of the "pivot" index to look for said integer and perform a binary search on those 
integers that lie on the appropriate side of the "pivot".
*/

const searchSortedRotatedArray = (nums, target) => {
  let pivot = findPivotPoint(nums); // TC: log(n)
  if (nums[pivot] === target) return pivot;
  /* search smaller integers ("right side")  */
  else if (target < nums[0] || pivot === 0) return binarySearch(pivot); // TC: log(n) [WST]
  /* search larger integers ("left side")  */
  else return binarySearch(0, pivot - 1); // TC: log(n) [WST]

  function findPivotPoint() {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = Math.ceil((left + right) / 2);
      let guess = nums[mid];
      if (guess === target) return mid;
      else if (guess > nums[mid + 1]) return mid + 1;
      else if (guess < nums[mid - 1]) return mid - 1;
      else if (guess > nums[0]) left = mid + 1;
      else right = mid - 1;
    }

    return 0;
  }

  function binarySearch(left = 0, right = nums.length - 1) {
    if (nums[left] === target) return left;
    else if (nums[right] === target) return right;

    while (left <= right) {
      let mid = Math.ceil((left + right) / 2);
      let guess = nums[mid];
      if (guess === target) return mid;
      else if (guess < target) left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  }
};

// TESTING:
console.log(searchSortedRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Expect: 4
console.log(searchSortedRotatedArray([4, 5, 6, 7, 0, 1, 2], 6)); // Expect: 2
console.log(searchSortedRotatedArray([4, 5, 6, 7, 0, 1, 2], 5)); // Expect: 1
console.log(searchSortedRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Expect: -1
console.log(searchSortedRotatedArray([3, 4, 5, 6, 7, 8, 9, 0, 1, 2], 1)); // Expect: 8
console.log(searchSortedRotatedArray([7, 8, 9, 0, 1, 2, 3, 4, 5] , 8)); // Expect: 1
console.log(searchSortedRotatedArray([1, 2, 3, 4, 5, 6, 7, 8] , 4)); // Expect: 3
console.log(searchSortedRotatedArray([1, 3] , 3)); // Expect: 1
