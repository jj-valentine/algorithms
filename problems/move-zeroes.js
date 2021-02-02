"use strict";

/* 
Given an array of integers, write a function to move all of the zeroes to the end of together array while 
maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array, 
and attempt to minimize the total number of operations.

  EX:
    arr = [0, 1, 0, 3, 12] → moveZeroes(arr) = [1, 3, 12, 0, 0]
 */

/* n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

 const moveZeroes = arr => {
  let headZero = 0, nextZero = headZero, zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && zeroes > 0) {
      arr[headZero] = arr[i];
      arr[i] = 0;
      if (zeroes === 1) headZero = i
      else {
        headZero = nextZero;
        nextZero = headZero + 1;
      }
    } else {
      zeroes++;
      if (zeroes === 1) headZero = i;
      if (zeroes === 2) nextZero = i;
    } 
  }
  return arr;
}

// console.log(moveZeroes([0, 0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1, 0, 3, 12, 0, 0, 13, 0, 14, 18]));
