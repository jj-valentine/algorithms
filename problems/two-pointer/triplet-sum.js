"use strict"; // TAGS: Two Pointers

/* 
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

  EX's:
    arr = [-3, 0, 1, 2, -1, 1, -2] → tripletSumToZero(arr) = [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]

    arr = [-5, 2, -1, -2, 3] → tripletSumToZero(arr) = [[-5, 2, 3], [-2, -1, 3]]
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(nlog(n) * n^2) → O(n^2) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: First, we sort our input array, and then loop through that sorted array. For every UNIQUE element that we iterate over, 
we search the rest of the array (all numbers to the RIGHT of the current element) for pairs that sum up to the given element, 
but with the opposite sign. This is done by initializing two pointers -- one that starts at the index directly to the right 
of the given element whose pair we're searching for, and one that always starts at the last index of the array. When we find a pair 
that sums to the element of interest (with an opposite sign), we've found a triplet (three numbers that add to zero). 
Furthermore, we add an array of the numbers belonging to the triplet to the output array and then continue by making sure we skip over 
any adjacent duplicate elements (for both the left and right pointers). Either way, we continue looping through the right-hand chunk 
of the array searching for pairs until our pointers cross paths, at which time we repeat all the above steps for the next element in 
the sorted array according to our outer loop.   
*/

const tripletSumToZero = arr => {
  arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    searchPairs(-arr[i], i + 1);
  }

  function searchPairs(targetSum, left) {
    let right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[left] + arr[right];
      // we've found a triplet
      if (currentSum === targetSum) {
        triplets.push([-targetSum, arr[left++], arr[right--]]);
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (currentSum < targetSum) left++;
      else right--;
    }
  }
  
  return triplets;
};

// TESTING:
console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])); // Expect: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(tripletSumToZero([2, 1, -1, 0, 3, -2])); // Expect: [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]
console.log(tripletSumToZero([-5, 2, -1, -2, 3, -1])); // Expect: [[-5, 2, 3], [-2, -1, 3], [-1, -1, 2]]
console.log(tripletSumToZero([0, 0, 5, 1, 2, 1, 3])); // Expect: []
console.log(tripletSumToZero([-2, -4, -1, -3, -1, -3])); // Expect: []
