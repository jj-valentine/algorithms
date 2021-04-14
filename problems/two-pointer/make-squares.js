"use strict"; // TAGS: Two Pointers

/* 
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

  EX's:
    arr = [-2, -1, 0, 2, 3] → makeSquares(arr) = [0, 1, 4, 4, 9]

    arr = [-3, -1, 0, 1, 2] → makeSquares(arr) = [0, 1, 1, 4, 9]
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(2n) → O(n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const makeSquares = arr => {
  let squares = [];
  let left = arr.length - 1, right = arr.length;
  // find first positive number or zero 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      left = i;
      right = left + 1; 
      break;
    }
  }

  const square = n => {
    return n === undefined ? Infinity : n * n;
  }

  while (left > -1 || right < arr.length) {
    let sL = square(arr[left]), sR = square(arr[right]);
    if (left < 0 || sR < sL) {
      squares.push(sR);
      right++;
    } else if (right > arr.length - 1|| sL < sR) {
      squares.push(sL);
      left--;
    } else if (sL === sR) {
      squares.push(sL, sR);
      right++;
      left--;
    }
  }
  return squares;
};

/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: Fill output array with placer strings/numbers and initialize a counter index that starts at n - 1, 
and two index pointers -- one that starts at each end of input array (0, n - 1). While the left pointer (index) is less 
than or equal to that of the right (or the counter index is greater than 0), check the square of numbers at each pointer index.
If the left square is bigger than the right square, add square to output array at counter index → decrement
index counter and increment left index pointer. Otherwise (the right square is bigger or they are equal),
add square to output array at counter index → decrement counter index and decrement right index pointer.
*/

const makeSquaresV2 = arr => {
  let n = arr.length;
  let squares = Array(n).fill("empty");
  let left = 0, right = n - 1, highestIdx = right;

  while (left <= right) {
    let sL = arr[left] * arr[left], sR = arr[right] * arr[right];

    if (sL > sR) {
      squares[highestIdx--] = sL;
      left++;
    } else {
      squares[highestIdx--] = sR;
      right--;
    }
  }
  return squares;
}

// TESTING:
console.log(makeSquaresV2([-2, -1, 0, 2, 3]));
console.log(makeSquaresV2([-3, -1, 0, 1, 2]));
console.log(makeSquaresV2([-3, -2, -1]));
console.log(makeSquaresV2([1, 2, 3]));
