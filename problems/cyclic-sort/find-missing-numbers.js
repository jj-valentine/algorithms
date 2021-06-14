"use strict"; // TAGS:

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
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'Cyclic Sort' pattern/approach -- Loop over elements in array, swapping those that don't match their index,
and moving to the next element if we find a duplicate that's already been placed in it's appropriate position.
Afterward, loop over the now "sorted" (with the exception of duplicate elements) array, and if the number doesn't
match it's index ('i' + 1), we know that number ('i' + 1) is a missing number.
*/

const findMissingNumbersV2 = arr => {
  let i = 0;
  while (i < arr.length) {
    let idx = arr[i] - 1;
    if (arr[idx] === arr[i]) {
      i++;
      continue;
    }
    if (idx !== i) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    if (arr[i] === i + 1) i++;
  }

  return arr.reduce((missing, n, i) => n !== i + 1 ? missing.concat([i + 1]) : missing, []);
}

[1, 2, 3, 1, 5, 3, 2, 8]
// TESTING:
console.log(findMissingNumbersV2([2, 3, 1, 8, 2, 3, 5, 1]));