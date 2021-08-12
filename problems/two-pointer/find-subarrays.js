"use strict"; // TAGS: Two Pointers

/*
Given an array with positive numbers and a target number 'k', find all of its contiguous subarrays 
whose product is less than the target number.

 EX's
  arr = [2, 5, 3, 10], k = 30 → findSubarrays = [[2], [5], [2, 5], [3], [5, 3], [10]]

  arr = [8, 2, 6, 5], k = 50 → findSubarrays = [[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]
*/
/*
n = # of elements in input array
+ RUNTIME Complexity: O(n^2) [WST]
+ SPACE Complexity: O(n) [for temp. array] → O(n^2 * n + n) → O(n^3) [WST]
NOTE: At worst, our space complexity will be O(n^3) because there will be potentially 
n + (n-1) + (n-2) + ... + 2 + 1 = n*(n + 1)/2 contiguous arrays and again, in the worst case 
(not one element is smaller than the target), n elements in each array.
*/

const findSubarrays = (arr, k) => {
  let currSum = 1, products = [];
  for (let i = 0; i < arr.length; i++) {
    let pointer = i, subArray = [];
    while (currSum < k && pointer < arr.length) {
      currSum *= arr[pointer];
      if (currSum < k) {
        subArray = subArray.slice();
        subArray.push(arr[pointer]);
        products.push(subArray);
      }
      pointer++;
    }
    currSum = 1;
    subArray = [];
  }
  return products;
};

// TESTING:
console.log(findSubarrays([2, 5, 3, 10], 30)); // Expect: [[2], [2, 5], [5], [5, 3], [3], [10]]
console.log(findSubarrays([8, 2, 6, 5], 50)); // Expect: [[2], [2, 5], [5], [5, 3], [3], [10]]
