"use strict"; // TAGS: Array, Permutation, Combination, Tree, Recursive, Backtracking, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Google, LinkedIn, Microsoft

/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

  EX's:
    arr = [1, 2, 3] → findPermutations(arr) = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

    arr = [0, 1] → findPermutations(arr)- [[0, 1], [1, 0]]

    arr = [1] → findPermutations(arr)- [[1]]
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n!) [WST]
+ SPACE Complexity: O(n + n) → O(n) [WST]
*/

const findPermutations = arr => {
  let permutations = [];
  backtrackToFindPermutations();
  return permutations;

  function backtrackToFindPermutations(currPerm = []) {
    if (currPerm.length === arr.length) {
      permutations.push(currPerm.concat());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (currPerm.includes(arr[i])) continue;
      currPerm.push(arr[i])
      backtrackToFindPermutations(currPerm);
      currPerm.pop();
    }
  }
};


/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n * n!) → O(n!) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: When calculating the time complexity of this algorith, consider that we are generating 'n!' permutations,
however, it will take 'n' recursive calls to reach each permutation: O(n * n!) → O(n!). For that same reason, our space complexity 
(excluding the output array) would be O(n).
*/

const findPermutationsV2 = arr => {
  let permutations = [];
  backtrackToFindPermutations();
  return permutations;
  
  function backtrackToFindPermutations(first = 0, currPerm = arr) {
    if (first === arr.length) {
      permutations.push(currPerm.concat());
      return;
    }

    for (let i = first; i < arr.length; i++) {
      [currPerm[i], currPerm[first]] = [currPerm[first], currPerm[i]];
      backtrackToFindPermutations(first + 1, currPerm);
      [currPerm[i], currPerm[first]] = [currPerm[first], currPerm[i]];    
    }
  }
};

// TESTING:
console.log(findPermutationsV2([1, 2, 3])); // Expect: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// console.log(findPermutationsV2([0, 1])); // Expect: [[0, 1], [1, 0]]
// console.log(findPermutationsV2([1])); // Expect: [[1]]


