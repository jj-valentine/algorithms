"use strict"; // «TAGS» Array, Permutation, Combination, Recursive, Backtracking, LC : #46 (Medium), Companies: Amazon, Apple, Facebook

/*

Part #1:
  Given an array of integers and an integer 'k', return a list of all possible combinations of the integers from the array of size 'k'

  EX:
    arr = [1, 2, 3, 4], k = 2 → findCombinationsP1()

Part #2:
  Given two integers 'n' and 'k', return all possible combinations of 'k' numbers out of the range: [1, 'n'].
  You may return the answer in any order

    EX: 
      n = 4, k = 2 → findCombinationsP2(n, k) = [[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]
      n = 3, k = 3 → findCombinationsP2(n, k) = [[1, 2, 3]]
      n = 1, k = 1 → findCombinationsP2(n, k) = [[1]]
*/

/*
SOLUTION #1 (Part #1)
n = # of elements/integers in input array
k = # of integers in each combination
C['n' CHOOSE 'k'] = C[n, k] = (n! / (k!·(n - k)!))
+ RUNTIME Complexity: O(P[n, k]) [WST]
+ SPACE Complexity: O(k + k) → O(k) [WST]
*/

/*
SOLUTION #1 (Part #2)
n = max possible integers in each combination (top of "range")
k = # of integers in each combination
C['n' CHOOSE 'k'] = C[n, k] = (n! / (k!·(n - k)!))
+ RUNTIME Complexity: O(P[n, k]) [WST]
+ SPACE Complexity: O(k + k) → O(k) [WST]
*/

const findCombinationsP2 = (n, k) => {
  let combinations = [];
  recurseToFindCombinations();
  return combinations;

  function recurseToFindCombinations(startIdx = 1, currCombo = []) {
    if (currCombo.length === k) {
      combinations.push(currCombo.concat());
      return;
    }

    for (let i = startIdx; i < n + 1; i++) {
      currCombo.push(i);
      recurseToFindCombinations(i + 1, currCombo);
      currCombo.pop();
    }
  }
};

// TESTING:
console.log(findCombinations(5, 5)); // Expect: [[1, 2, 3, 4, 5]]
console.log(findCombinations(4, 3)); // Expect: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
console.log(findCombinations(5, 3)); // Expect: [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]]



























