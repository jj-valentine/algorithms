"use strict"; // TAGS: Two Pointers

/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that 
arr[i] + arr[j] + arr[k] < target (where 'i', 'j', and 'k' are three different indices). 

Write a function to return the count of such triplets.

  EX's:
    arr = [-1, 0, 2, 3], target = 3 → tripletsWithSmallerSum(arr, target) = 2 
    EXPLANATION -- there exist two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

    arr = [-1, 4, 2, 1, 3], target = 5 → tripletsWithSmallerSum(arr, target) = 4
    EXPLANATION -- there exist four triplets whose sum is less than the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(nlog(n) * n^2) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE:
*/

const tripletsWithSmallerSum = (arr, target) => {
  let sorted = [...arr].sort((a, b) => a - b);
  let triplets = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    else if (sorted[i] >= target) return triplets;
    triplets += findPairs(sorted[i], i + 1);
  }

  function findPairs(n, left) {
    let tripletsForN = 0;
    let right = sorted.length - 1;
    while (left < right) {
      let currSum = n + sorted[left] + sorted[right];
      if (currSum < target) {
        tripletsForN += right - left;
        left++;
      } else right--;
    }
    return tripletsForN;
  }

  return triplets;
};

// TESTING:
console.log(tripletsWithSmallerSum([-1, 0, 2, 3], 3)); // Expect: [[-1, 0, 3], [-1, 0, 2]]
console.log(tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5)); // Expect: [[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]]