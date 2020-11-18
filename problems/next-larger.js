"use strict";


/*
Given an array a composed of distinct elements, find the next larger element for each element 
of the array (i.e. the first element to the right that is greater than this element, 
in the order in which they appear in the array), and return the results as a new array of the 
same length. If an element does not have a larger element to its right, put -1 in the 
appropriate cell of the result array.

Write your solution with O(n) complexity.

  EX:
  arr = [6, 7, 3, 8] → nextLarger(arr) = [7, 8, 8, -1]

  In this array, the next larger element for 6 is 7, for 7 is 8, for 3 is 8 
  (7 is not a valid option since elements from the array can only be compared to 
  elements to their right), and for 8 there is no such element, so we put -1 in the last cell. 
*/

// arr = [0, 8, 11, 1, 7, 5, 6]
// result = [ ,11.-1,7,-1, 6 , -1]
// next = 11
// larger = 11
// arr[i] = 8
const nextLarger = arr => {
  let result = [-1];
  if (arr.length === 1) return result;
  let next = arr[arr.length - 2], larger = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (next > arr[i]) result.unshift(next);
    else if (larger > arr[i]) result.unshift(larger);
    else result.unshift(-1);
    next = Math.max(arr[i], arr[i - 1]);
    larger = Math.max(next, larger);
  }
  return result;
} 

// console.log(nextLarger([6, 7, 3, 8])); // [7, 8, 8, -1]
// console.log(nextLarger([6, 2, 7, 3, 1, 0, 4, 5])); // [7, 7, -1, 4, 4, 4, 5, -1]
console.log(nextLarger([10, 3, 12, 4, 2, 9, 13, 0, 8, 11, 1, 7, 5, 6])); // [12, 12, 13, 9, 9, 13, -1, 8, 11, -1, 7, -1, 6, -1]

debugger;
