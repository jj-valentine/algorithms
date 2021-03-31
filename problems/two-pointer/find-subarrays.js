"use strict";

/*
Given an array with positive numbers and a target number 'k', find all of its contiguous subarrays 
whose product is less than the target number.

 EX's
  arr = [2, 5, 3, 10], k = 30 → findSubarrays = [[2], [5], [2, 5], [3], [5, 3], [10]]

  arr = [8, 2, 6, 5], k = 50 → findSubarrays = [[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]
*/
/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const findSubarrays = (arr, k) => {
  let currSum = 1, products = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let pointer = windowEnd, subArray = [];
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
