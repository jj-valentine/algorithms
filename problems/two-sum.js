'use strict';

/* Given an array of numbers and a target value, return true if there are two numbers in the array that sum up to the target value. Otherwise, return false. */

/*
n = # of elements in array
RUNTIME Complexity: O(n) [WST]
SPACE Complexity: O(n) [WST]
NOTE: Iterate through array checking to see if an element equal to the difference between the target and the current value (in array) exists in the cache. If it does, return true. If it doesn't, add the current element in the array to the cache. Return false upon reaching the end of the array.
*/

const twoSum = (arr, target, cache = {}) => {
  for (let i = 0; i < arr.length; i++) {
    if (cache[target - arr[i]]) return true;
    cache[arr[i]] = true;
  }
  return false;
}

// TESTING:
const array = [9, -3, 2, -1, 0, 5, 120, -121];
console.log(twoSum(array, 120)); // -> true
