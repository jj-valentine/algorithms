"use strict"; // TAGS: Array, Unsorted, Duplicate, Binary Search, Constant Space, Two Pointers, Fast & Slow, Tortoise & Hare, Cyclic Sort, LeetCode: #287, Difficulty: Medium, Companies: Amazon, Facebook, Google, Microsoft, Uber

/*

We are given an unsorted array containing 'n + 1' numbers taken from the range '1' to 'n'. The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space or modifying the input array

  EX:
    arr = [2, 4, 1, 4, 4] → findDuplicateNumber(arr) = 4
*/

/*
SOLUTION #1 (Binary Search)
n = # of integers in input array
+ RUNTIME Complexity: O(n*log(n)) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Our approach should include running a binary search on every integer from '1' to 'n - 1' (NOT the integers in the input array). 
For every integer/"guess" we hit in said binary search, we can iterate through the input array and count how many integers are less than or equal to our "guess".
If at any point, we find that said count is larger than our "guess", we know that either the current "guess" OR an integer that's less than our "guess"
must be the duplicate integer we're looking for. Furthermore, in the aforementioned case, we'll save the POTENTIAL duplicate integer, and instruct our binary search
to continue looking for smaller integers (if we find any, we re-assign our the duplicate we've saved to be that integer instead, since the lowest integer for which this 
condition is true must be our duplicate). Conversely, if the count of integers in our input array that are less than or equal to our "guess", 
is less than or equal to the "guess" itself, we know to instruct our binary search to continue looking for larger integers instead.
*/

const findDuplicateNumber = arr => {
  if (arr.length === 2) return arr[0];
  let left = 1, right = arr.length - 1;
  let duplicate = -1;
  while (left <= right) {
    let midGuess = Math.floor((left + right) / 2);
    let lessThanOrEqual = arr.reduce((count, n) => n <= midGuess ? count + 1 : count, 0);

    if (lessThanOrEqual > midGuess) {
      duplicate = midGuess;
      right = midGuess - 1;
    } else left = midGuess + 1;
  }
  return duplicate;
};


/*
SOLUTION #2 (Tortoise & Hare)
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'Tortoise & Hare' pattern/approach...
*/

const findDuplicateNumberV2 = arr => {
  if (arr.length === 2) return arr[0];
 
};


/*
SOLUTION #3 (Modifies Input Array)
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'Cyclic Sort' pattern/approach...
*/

const findDuplicateNumberV3 = arr => {
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
console.log(findDuplicateNumber([2, 4, 1, 4, 4])); // Expect: 4
console.log(findDuplicateNumber([1, 5, 5, 4, 2, 3])) // Expect: 5
console.log(findDuplicateNumber([1, 1])) // Expect: 1

