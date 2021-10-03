"use strict";

/*
Write a function that implements the binary search method, returning the index of a given integer 'n' 
(if it exists) in an array of sorted numbers.
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(log(n)) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Iterative approach...
*/

const binarySearch = (arr, k) => {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess === k) return mid;
    else if (guess < k) { // guess is too low
      low = mid + 1;
    } else { // guess is too high
      high = mid - 1;
    }
  } 
  return null;
};


/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(log(n)) [WST]
+ SPACE Complexity: O(log(n)) [WST]
NOTE: Recursive approach...
*/

const binarySearchV2 = (arr, k, low = 0, high = arr.length - 1) => {
  let mid = Math.floor((low + high) / 2);
  if (low > high) return null;
  else if (arr[mid] === k) return mid;
  else if (arr[mid] < k) return binarySearchV2(arr, k, mid + 1, high);
  else return binarySearchV2(arr, k, low, mid - 1);
}

// TESTING:
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // Expect: 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)); // Expect: null
console.log(binarySearchV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // Expect: 1
console.log(binarySearchV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)); // Expect: null