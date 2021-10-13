"use strict"; // TAGS:

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. 
Write an algorithm that runs in 'O(n)' time.

  EX's: 
    arr = [100, 4, 200, 1, 3, 2] → longestConsecutiveSequence(arr) = 4
      EXPLANATION -- The longest consecutive elements sequence is '[1, 2, 3, 4]'

    arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] → longestConsecutiveSequence(arr) = 9
*/

/*
n = # of integers in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/
/* 
create a set/cache/hash of all the integers in array

loop through set
  
  check if the integer directly preceding current element exists in set
    
    if so → continue checking set to see how many of those integers
*/
const longestConsecutiveSequence = arr => {
  let nums = new Set(arr);
  let longestSeq = 0;
  for (let n of nums) {
    let currNum = n, currSeq = 1;
    if (!nums.has(n - 1)) {
      while (nums.has(currNum + 1)) {
        currNum++;
        currSeq++;
      }

      longestSeq = Math.max(currSeq, longestSeq);
    }
  }

  return longestSeq;
};

// TESTING:
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));