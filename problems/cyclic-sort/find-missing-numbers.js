"use strict"; // TAGS: Cyclic Sort, Missing Number, Difficulty: Easy

/*
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

  EX:
    arr = [2, 3, 1, 8, 2, 3, 5, 1] → findMissingNumbers(arr) = [4, 6, 7]
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(2n) → O(n) [WST]
+ SPACE Complexity: O(2n) → O(n) [WST]
NOTE: Use hash map (object) to find numbers that exist in range 1 to 'n'. Then, loop over original array   
and make note of all of the indexes ('i' + 1) that don't exist in the object.
*/

const findMissingNumbers = arr => {  
  let nums = arr.reduce((existingNums, n) => {
    existingNums[n] = true;
    return existingNums;
  }, {});
 
  return arr.reduce((missing, n, i) => nums[i + 1] === undefined ? missing.concat([i + 1]) : missing, []);
};

/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n + (n - 1) + n) → O(3n) → O(n) [WST]
+ SPACE Complexity: O(n) [WST] -- Output Array
NOTE: Employ 'Cyclic Sort' pattern/approach -- Loop over elements in array, swapping those numbers whose associated
index (arr[i] - 1) doesn't have the correct element (arr[i]). While iterating, those elements whose associated index 
DOES in fact already have the correct element are considered to be in their appropriate place, or duplicates of an element
who is in it's correct place. When iterating over this newly "sorted" array, those elements' indexes that don't match their 
appropriate index (arr[i] - 1) must be missing numbers. 
*/

const findMissingNumbersV2 = arr => {
  let i = 0;
  while (i < arr.length) {
    let idx = arr[i] - 1;
    if (arr[i] !== arr[idx]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    else i++;
  }
  return arr.reduce((missing, n, i) => n !== i + 1 ? missing.concat([i + 1]) : missing, []);
}

[1, 2, 3, 1, 5, 3, 2, 8]
// TESTING:
console.log(findMissingNumbersV2([2, 3, 1, 8, 2, 3, 5, 1]));