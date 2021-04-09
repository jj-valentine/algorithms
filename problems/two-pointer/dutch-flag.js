"use strict";

/*
Given an array containing 0's, 1's and 2's, sort the array in-place. You should treat numbers of the array as objects
(hence, we can’t count 0's, 1's, and 2's to recreate the array)

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three 
different numbers, that's why it is called Dutch National Flag problem.

  EX's:
    arr = [1, 0, 2, 1, 0] → dutchNationalFlagProblem(arr) = [0, 0, 1, 1, 2]

    arr = [2, 2, 0, 1, 2, 0] → dutchNationalFlagProblem(arr) = [0, 0, 1, 2, 2, 2]
*/

// l = 2, h = 3, idx = 3
// [0, 0, 1, 1, 2]
/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const dutchNationalFlag = arr => {
  let low = 0, high = arr.length - 1, idx = 0;
  while (idx <= high) {
    if (arr[idx] === 0) {
      [arr[idx], arr[low]] = [arr[low], arr[idx]];
      low++;
      idx++;
    } else if (arr[idx] === 1) idx++;
    else {
      [arr[idx], arr[high]] = [arr[high], arr[idx]];
      high--;
    }
  }
  return arr;
};

// TESTING:
console.log(dutchNationalFlag([2, 2, 0, 1, 2, 0]));

