"use strict"; // TAGS:

/*
Given a SORTED array of distinct integers, write a function that returns the lowest index 'i' for which 'arr[i] == i'. 
Return '-1' if there no such index exists. 

  EX's:
    arr = [-8, 0, 2, 5] → indexEqualsValueSearch(arr) = 2
    
    arr = [-18, -3, -1, 0, 3, 6] → indexEqualsValueSearch(arr) = -1

    arr = [-2, -1, 0, 3, 6] → indexEqualsValueSearch(arr) = 3
/*

n = # of integers/elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

/*  
NOTES: We could iterate through array (start to finish) and check every element/index... This actually wouldn't be optimal though 
since our lowest index that matches its element could be at the end of the array (even if MUCH LOWER integers exist in the array).
Thus, this seems like a good candiate problem for binary search. We can use a modified binary search to try to locate the smallest index
that equals its element.

binary search
  if element is greater than its index, because array is sorted, we know we have to travel LEFT (no element will then equal its index to the RIGHT of it)
  if element is less than its index, we go RIGHT
*/

const indexEqualsValueSearch = arr => {
  let smallestMatch = -1;
  let left = 0, right = arr.length - 1;
  let searchRight = false;
  while (left < right) {
    let midIdx = Math.floor((left + right) / 2);
    let guess = arr[midIdx];
    if (guess === midIdx) {
      smallestMatch = Math.min(smallestMatch, midIdx);
      if (rightSearch) return smallestMatch;
      else right = midIdx - 1;
    } else if (guess > midIdx) right = midIdx - 1;
    else {
      left = midIdx + 1;
      rightSearch = true;
    }
  }
  
  return smallestMatch;
};





*/
function indexEqualsValueSearch(arr) {
  let left = 0, right = arr.length - 1;
  let lowestMatch = -1;
  let rightSideSearch = false;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guess = arr[mid];
    if (guess === mid) {
      lowestMatch = mid;
      if (rightSideSearch) return lowestMatch;
      else right = mid - 1;
    }
    else if (guess > mid) right = mid - 1;
    else {
      rightSideSearch = true;
      left = mid + 1;
    }
  }
  
  return lowestMatch;
}

// TESTING:
console.log(indexEqualsValueSearch([-8, 0, 2, 5])); // Expect: 2
console.log(indexEqualsValueSearch([-18, -3, -1, 0, 3, 6])); // Expect: -1
console.log(indexEqualsValueSearch([-2, -1, 0, 3, 6])); // Expect: 3
console.log(indexEqualsValueSearch([-2, -1, 0, 3, 5, 6, 7, 8, 9, 10])); // Expect: 3