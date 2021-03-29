"use strict";

/*
Given an array of integers and a target number, return an array arrays of all pairs that sum up to the target number.

  EX: 
    arr = [1, 3, 2, 4, 5, 46, 6, 7], target = 5 → sumPairs(arr, target) = [[1, 4], [3, 2]]
*/

/*
n = # of elements in array
+ RUNTIME Complexity: O(n + n) → O(n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const sumPairs = (arr, target) => {
  let uniq = [...new Set(arr)];
  let pairs = [], nums = {};
  for (let i = 0; i < uniq.length; i++) {
    if (nums[target - uniq[i]]) pairs.push([target - uniq[i], uniq[i]]);
    else nums[uniq[i]] = true;
  }
  return pairs;
}

// TESTING:
console.log(sumPairs([1, 3, 2, 2, 4, 5, 46, 6, 7], 5));
