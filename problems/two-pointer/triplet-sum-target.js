"use strict"; // TAGS: Two Pointers

/* 
Given an array of unsorted numbers and a target number 'k', find a triplet in the array whose sum is as close to 
the target number as possible, and return the sum of the triplet. If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.

  EX's:
    arr = [1, 2, -2, 0], k = 2 → tripletSumCloseToTarget(arr, k) = 1
      EXPLANATION -- triplet [-2, 1, 2] has the closest sum to the target

    arr = [1, 2, -3, -1], k = 1 → tripletSumCloseToTarget(arr, k) = 0
      EXPLANATION -- triplet [-3, 1, 2] has the closest sum to the target

    arr = [1, 0, 1, 1], k = 100 → tripletSumCloseToTarget(arr, k) = 3
      EXPLANATION -- triplet [1, 1, 1] has the closest sum to the target 
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n*log(n) + n^2) → O(n^2) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: This is much like the "Triplet Sum" question, in part due to both problems benefiting 
from utilization of the of 'Two Pointer' pattern/approach. 
*/

const tripletSumCloseToTarget = (arr, k) => {
  arr.sort((a, b) => a - b);
  let smallestDiff = Infinity, smallestSum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let perfectTriplet = findPairs(arr[i], i + 1);
    if (perfectTriplet) return k;
  }

  function findPairs(firstNum, left) {
    let right = arr.length - 1;
    while (left < right) {
      let totalSum = firstNum + arr[left] + arr[right];
      let diff = Math.abs(totalSum - k);
      if (totalSum === diff) return true;
      else if (diff < smallestDiff) {
        smallestSum = totalSum;
        smallestDiff = diff;
      } else if (diff === smallestDiff && totalSum < smallestSum) smallestSum = totalSum;

      while (left < right && arr[left] === arr[left - 1]) left++;
      while (left < right && arr[right] === arr[right + 1]) right--;

      if (totalSum < k) left++;
      else right--;
    }
    return false;
  }
  return smallestSum;
}

// TESTING:
console.log(tripletSumCloseToTarget([1, 1, -1, -1, 3])); // Expect: 1
// console.log(tripletSumCloseToTarget([1, 2, -2, 0], 2)); // Expect: 1
// console.log(tripletSumCloseToTarget([1, 2, -3, -1], 1)); // Expect: 0
// console.log(tripletSumCloseToTarget([1, 1, 1], 100)); // Expect: 3
// console.log(tripletSumCloseToTarget([1, -1, -3, 1, 2, 0], 2)); // Expect: 2

