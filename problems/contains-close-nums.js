"use strict";

/* 
Given an array of integers (arr) and an integer (k), determine whether there are 
two distinct indices  (i, and j) in the array where arr[i] = arr[j] and the absolute difference 
between 'i' and 'j' is less than or equal to 'k' 
*/

const containsCloseNums = (arr, k) => {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      if ((i - cache[arr[i]]) <= k) return true;
    }
    cache[arr[i]] = i;
  }
  return false;
}


const containsCloseNumsV2 = (arr, k, cache = {}) => {
  return arr.some((el, i) => {
      if (cache[el] && (i - cache[el]) <= k) return true;
    cache[el] = i;
    });
}





console.log(JSON.stringify(containsCloseNums([1, 2, 3, 4, 5, 2, 6, 7], 4))); // true
console.log(JSON.stringify(containsCloseNums([1, 2, 3, 4, 5, 2, 6, 7], 3))); // false
console.log(JSON.stringify(containsCloseNums([1, 2, 3, 4, 5, 2, 6, 2], 3))); // true
console.log(JSON.stringify(containsCloseNums([1, 2, 3, 4, 5, 6, 7], 4))); // false (no duplicates)
