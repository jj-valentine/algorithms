"use strict"; // TAGS: Cyclic Sort, Missing Number, Difficult: Hard

/*
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

  EX's
    arr = [3, -1, 4, 5, 5], k = 3 → findFirstKMissingNumbers(arr, k) = [1, 2, 6]

    arr = [2, 3, 4], k = 3 → findFirstKMissingNumbers(arr, k) = [1, 5, 6]

    arr = [-2, -3, 4], k = 2 → findFirstKMissingNumbers(arr, k) = [1, 2]
/*

n = # of elements in input array
+ RUNTIME Complexity: O(n + (n + k)) → O(2n + k) → O(n + k) [WST]
+ SPACE Complexity: O(n) [WST] -- Output Array
NOTE:
*/

const findFirstKMissingNumbers = (arr, k) => {
  let i = 0;
  let n = arr.length
  while (i < n) {
    let idx = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[idx]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    else i++;
  }

  let j = 0, missing = [];
  while (missing.length < k) {
    if (j >= n) {
      if (!arr.includes(j)) missing.push(j);
    } else if (arr[j] !== j + 1) missing.push(j + 1);
    j++;
  }

  return missing;
}

// TESTING:
console.log(findFirstKMissingNumbers([2, 1, 3, 6, 5], 2));