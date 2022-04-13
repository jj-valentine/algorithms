"use strict";

/* 
Given an array of integers, write a function to move all of the zeroes to the end of together array while 
maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array, 
and attempt to minimize the total number of operations.

  EX:
    arr = [0, 1, 0, 3, 12] → moveZeroes(arr) = [1, 3, 12, 0, 0]
 */

/*
SOLUTION #1 
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Brute Force -- # of operations is not optimized here
*/

const moveZeroes = arr => {
  let headZero = 0, nextZero = headZero, zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && zeroes > 0) {
      // swap non-zero value and "head" zero
      arr[headZero] = arr[i];
      arr[i] = 0;
      // reassign location of "head" zero
      if (zeroes === 1) headZero = i
      else {
        headZero = nextZero;
        nextZero = headZero + 1;
      }
    } else if (arr[i] === 0) {
      zeroes++;
      if (zeroes === 1) headZero = i;
      if (zeroes === 2) nextZero = i;
    } 
  }
  return arr;
}

/* 
SOLUTION #2
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note # of operations are minimized -- not moving EVERY zero, but instead ...
*/

const moveZeroesV2 = arr => {
  let last = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[last];
      arr[last] = arr[i];
      arr[i] = temp;
      last++;
    }
  }
  return arr;
}

console.log(moveZeroesV2([2, 1]));
console.log(moveZeroesV2([0, 0, 1, 0, 3, 12]));
console.log(moveZeroesV2([0, 0, 1, 0, 3, 12, 0, 0, 13, 0, 14, 18]));
