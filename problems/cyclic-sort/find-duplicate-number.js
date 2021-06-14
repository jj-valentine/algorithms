"use strict"; // TAGS: Cyclic Sort, Duplicate, Difficulty: Easy

/*
We are given an unsorted array containing 'n' + 1 numbers taken from the range 1 to 'n'. 
The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

  EX:
    arr = [2, 4, 1, 4, 4] → findDuplicateNumber(arr) = 4
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'Cyclic Sort' pattern/approach
*/

const findDuplicateNumber = arr => {
  let i = 0;
  while (i < arr.length) {
    let idx = arr[i] - 1;
    if (arr[i] !== arr[idx]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    else i++;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j + 1) return arr[j];
  }
};

// TESTING:
console.log(findDuplicateNumber([2, 4, 1, 4, 4]));
