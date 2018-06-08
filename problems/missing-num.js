'use strict';

/* You are given a zero-indexed array A consisting of N different integers in the range [1..(N + 1)]. In other words, exactly one element is missing. Write a function that, given an array A, returns the value of the missing element.

For example, given an array such that:

  array[0] = 2
  array[1] = 3
  array[2] = 1
  array[3] = 5

the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100k]
 * the elements of the array are all unique
 * each element of the array is an integer within the range [1..(N + 1)]

Complexity:
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(N), beyond input storage (not counting storage required for input arguments)

Challenge:
  ** cannot use additional storage, variables are okay, but not any TYPE of object
  ** keep in mind time complexity */

/*
n = # of elements in array
[WST] RUNTIME Complexity: O(n)
[WST] SPACE Complexity: O(1)
NOTE: The sum of all numbers from 1 to n can be represented by the equation: n(n + 1) / 2. Calculate the sum of all the numbers from 1 to array.length + 1. Then, iterate through the elements in the array, subtracting each element from the sum. Afterwards, the value of sum will reflect the value of the missing element.
*/

function missingNum(arr) {
  let sum = ((arr.length  + 1 ) * (arr.length + 2)) / 2;
  return arr.reduce((sum, el) => sum -= el, sum);
}

const array = [2, 3, 7, 1, 5, 6, 10, 8, 4];
console.log(missingNum(array)); // -> 9
