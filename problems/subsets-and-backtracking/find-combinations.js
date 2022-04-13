"use strict"; // «TAGS» Array, Permutation, Combination, Recursive, Backtracking, LeetCode: #46, Difficulty: Medium, Companies: Amazon, Apple, Facebook

/*
Given two integers 'n' and 'k', return all possible combinations of 'k' numbers out of the range: [1, 'n'].
You may return the answer in any order

  EX: 
    n = 4, k = 2 → findCombinations(n, k) = [[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]
    n = 3, k = 3 → findCombinations(n, k) = [[1, 2, 3]]
    n = 1, k = 1 → findCombinations(n, k) = [[1]]
*/

/*
n = max possible integer in each combination (top of "range")
k = # of integers in each combination
P['n' CHOOSE 'k'] = P[n, k] = n! / (k! * (n - k)!)
+ RUNTIME Complexity: O(P[n, k]) [WST]
+ SPACE Complexity: O(k + k) → O(k) [WST]
*/

const findCombinations = (n, k) => {
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



























