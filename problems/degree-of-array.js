"use strict"; // «TAGS» Array, Degree, Contiguous, Subarray, Smallest, Length, Frequency, Hash, Difficulty: Easy, Companies: Snap

/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the 
maximum frequency of any one of its elements. our task is to find the smallest possible length 
of a (contiguous) subarray of nums, that has the same degree as nums.

  EX's:
    nums = [1, 2, 2, 3, 1] → degreeOfArray(nums) = 2
    Explanation -- The input array has a degree of '2' because both elements '1' and '2' appear twice. 
      Of the subarrays that have the same degree, the shortest length is '2': 
      [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
      
    nums = [1, 2, 2, 3, 1, 4, 2] → degreeOfArray(nums) = 2
    Explanation -- The degree is '3' because the element '2' is repeated '3' times. 
      So, [2, 2, 3, 1, 4, 2] is the shortest subarray, which returning 6.
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(2n) → O(n)  [WST]
+ SPACE Complexity: O(3n) → O(n) [WST]
⇲ note
*/

const degreeOfArray = nums => {
  let maxFreq = 0;
  let freq = nums.reduce((cache, n, i) => {
      if (cache[n]) {
          let nFreq = cache[n][0]++;
          maxFreq = Math.max(nFreq + 1, maxFreq);
          cache[n][2] = i; 
      } else cache[n] = [1, i, i];
      return cache;
  }, {});

  return maxFreq === 1 ? maxFreq : 
    Object.keys(freq)
      .reduce((smallestDiff, n) => {
        return freq[n][0] === maxFreq ? Math.min(freq[n][2] - freq[n][1] + 1, smallestDiff) : smallestDiff
      }, nums.length);
};

// TESTING:
console.log(degreeOfArray([1 ,2 ,1, 2, 3, 1, 4, 2])); // Expect: 6
console.log(degreeOfArray([1, 3, 2, 2, 3, 1])); // Expect: 2