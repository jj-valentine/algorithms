"use strict"; // «TAGS» Array, Sorting, Merge, Swap, Constant Space Complexity, LC: #88 (Easy), IK: Sorting, Companies: Amazon, Apple, Facebook, Google, LinkedIn, Microsoft, Uber

/*
Given two input arrays, merge the first array into the second and return the latter. The first input array has 'n' positive numbers, 
and they are sorted in the non-descending order. The second input array array has '2n' numbers -- the first 'n' are also positive and 
sorted in non-descending order, but the last 'n' numbers are all zeroes.

  EX:
    a1 = [1, 3, 5], a2 = [2, 4, 6, 0, 0, 0] → mergeSortedArrays(a1, a2) = [1, 2, 3, 4, 5, 6]
*/

/*
n = # of elements in input FIRST input array (i.e. 'a1') 
+ RUNTIME Complexity: O(2·n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const mergeSortedArrays = (a1, a2) => {
  const n = a1.length;
  let p1 = n - 1, p2 = p1, curr = (2 * n) - 1;

  while (curr >= 0) {
    if (p2 < 0 || a1[p1] > a2[p2]) {
      [a2[curr], a1[p1--]] = [a1[p1], a2[curr]];
    } else {
      [a2[curr], a2[p2--]] = [a2[p2], a2[curr]];
    }
    curr--;
  }

  return a2;
};


// TESTING:
console.log(mergeSortedArrays([2], [1, 0])); // Expect: [1, 2]
console.log(mergeSortedArrays([11, 11], [3, 11, 0, 0])); // Expect: [3, 11, 11, 11]
console.log(mergeSortedArrays([1, 10, 11, 12, 13], [2, 3, 4, 13, 15, 0, 0, 0, 0, 0])); // Expect: [1, 2, 3, 4, 10, 11, 12, 13, 13, 15]
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 0, 0, 0])); // Expect: [1, 2, 3, 4, 5, 6]


