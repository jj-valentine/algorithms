"use strict";

/*
Write a function that will take an array of integers, all of which will appear exactly twice, except for one integer that will appear exactly once. Return the integer that appears once.

  EX:
    uniqueNumber([1, 2, 1, 3, 3]); -> 2

BONUS: 1) Complete in O(n) time
       2) Complete in O(1) space
*/

 /*
 SOLUTION #1:
 n = length of array
 N = max elements in cache at one time (n/2 + 1)
 + RUNTIME Complexity: O(n)
 + SPACE Complexity: O(N) → O(n)
 ⇲ note Iterate over elements, checking if they've already been added to
 a given cache (object). If the key already exists, delete the existing key value pair. Otherwise, add element as a key to the cache (w/ arbitrary value).
*/

const uniqueNumber = (arr, cache = {}) => {
  arr.forEach(el => cache[el] ? delete cache[el] : cache[el] = true);
  return Object.keys(cache)[0];
}

/*
SOLUTION #2:
n = length of array
N = max elements in cache at one time (n/2 + 1)
+ RUNTIME Complexity: O(n + n * log(n)) → O(n)
+ SPACE Complexity: O(1)
⇲ note First, sort elements of array in ascending order. Then, iterate over every two elements in the array, checking to see if the given element matches the element following it - if it doesn't, we know we've found our 'unique' number.
*/

const uniqueNumber2 = arr => {
  arr.sort((a, b) => a - b); // O(n * log(n)) time
  for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) return arr[i];
  }
  return 'no unique numbers';
}

// TESTING:
const a1 = [1, 1, 3, 3, 2];
const a2 = [1, 4, 5, 3, 0, 2, 1, 3, 5, 2, 0];
console.log(uniqueNumber2(a1)); // -> 2
console.log(uniqueNumber2(a2)); // -> 4
