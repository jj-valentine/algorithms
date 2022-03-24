"use strict";

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n*log(n)) [BST/AVG/WST]
+ SPACE Complexity: O(n) [WST]
*/

const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...arr, ...left, ...right];
}

const mergeSort = arr => {
  const half = arr.length / 2;
  if (arr.length < 2) return arr;
  let left = arr.splice(half);
  return merge(mergeSort(left), mergeSort(arr));
};  

// TESTING:
let arr = [14, 7, 3, 12, 9, 11, 6, 2];
console.log(arr.splice(4), arr);
// console.log(mergeSort(arr));
