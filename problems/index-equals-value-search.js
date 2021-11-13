"use strict"; // TAGS: Array, Sorted, Distinct Integers, Lowest Index, Binary Search (Modified), Optimized, Difficulty: Easy

/*
Given a SORTED array of distinct integers, write a function that returns the lowest index 'i' for which 'arr[i] === i'. 
Return '-1' if there no such index exists. 

  EX's:
    arr = [-8, 0, 2, 5] → indexEqualsValueSearch(arr) = 2
    
    arr = [-18, -3, -1, 0, 3, 6] → indexEqualsValueSearch(arr) = -1

    arr = [-2, -1, 0, 3, 6] → indexEqualsValueSearch(arr) = 3
/*

/*
n = # of integers/elements in input array
+ RUNTIME Complexity: O(log(n)) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const indexEqualsValueSearch = arr => {
  let smallestMatch = -1;
  let rightSideSearch = false;
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let midIdx = Math.floor((left + right) / 2);
    let guess = arr[midIdx];
    if (guess === midIdx) {
      smallestMatch = midIdx;
      if (rightSideSearch) return smallestMatch;
      else right = midIdx - 1;
    } else if (guess > midIdx) right = midIdx - 1;
    else {
      left = midIdx + 1;
      rightSideSearch = true;
    }
  }
  
  return smallestMatch;
};

// TESTING:
console.log(indexEqualsValueSearch([-8, 0, 2, 5])); // Expect: 2
console.log(indexEqualsValueSearch([-18, -3, -1, 0, 3, 6])); // Expect: -1
console.log(indexEqualsValueSearch([-2, -1, 0, 3, 6])); // Expect: 3
console.log(indexEqualsValueSearch([-2, -1, 0, 3, 5, 6, 7, 8, 9, 10])); // Expect: 3