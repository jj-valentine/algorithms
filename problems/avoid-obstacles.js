"use strict";

/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.

  EX:
    inputArray = [5, 3, 6, 7, 9] → avoidObstacles(inputArray) = 4
*/


/*
n: length of input string
+ RUNTIME Complexity: [BST/WST]
+ SPACE Complexity: [BST/WST]
NOTE: Find the smallest possible number that does not divide evenly into any of the numbers (or their sum)
*/

function avoidObstacles(arr) {
  let total = arr.reduce((sum, n) => sum * n);
  for (var i = 2; total % i === 0 || arr.includes(i); i++){ console.log(i);
  }
  return i;
}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
// console.log(avoidObstacles([2, 3]));
// console.log(avoidObstacles([1, 4, 10, 6, 2]));


function knapsackLight(v1, w1, v2, w2, mW) {
  let v = {[v1]: w1, [v2]: w2}, tV = v1 + v2, mV = Math.max(v1, v2);
  console.log(v, tV, mV)
  console.log(v[mV], mW, 'w1')
  if (w1 + w2 <= mW) return tV;
  else if (v[mV] <= mW) return mV;
  else if (v[tV - mV] <= mW) return tV - mV;
  else return 0;
}

console.log(knapsackLight(10, 5, 6, 4, 8));
