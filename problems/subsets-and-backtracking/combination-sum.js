"use strict"; // «TAGS» Array, Permutation, Combination, Recursive, Backtracking, Sum, Choose, Target, Frequency, Duplicates, Candidates, Sort, LeetCode: #39/#40/#216, Difficulty: Medium, Companies: Airbnb, Amazon, Apple, Facebook, Google, LinkedIn, Microsoft

/*
Given an array of distinct integers and a target integer (i.e. 'target'), return a list of all unique combinations of integers/candidates 
where the chosen numbers sum to 'target'. You may return the combinations in any order. 

  Part #1:
    The same number may be chosen from candidates an UNLIMITED number of times. 
    Two combinations are unique if the frequency of at least one of the chosen numbers is different.

    EX's:
      arr = [2, 3, 6, 7], target = 7 → combinationSum(arr, target) = [[2, 2, 3], [7]]
        EXPLANATION -- '2' and '3' are candidates, and '2' + '2' + '3' = '7' (note that '2' can be used multiple times)

      arr = [2, 3, 5], target = 8 → combinationSum(arr, target) = [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

      arr = [2], target = 1 → combinationSum(arr, target) = []

      arr = [1], target = 1 → combinationSum(arr, target) = [[1]]

      arr = [1], target = 2 → combinationSum(arr, target) = [[1, 1]]
  

  Part #2:
    Each number in the input array may only be used once in the combination. The solution set must not contain duplicate combinations.

    EX's:
      arr = [10, 1, 2, 7, 6, 1, 5], target = 8 → combinationSumP2(arr, target) = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

      arr = [2, 5, 2, 1, 2], target = 5 → combinationSumP2(arr, target) = [[1, 2, 2], [5]]

  Part #3:
    Find all valid combinations of 'k' numbers that sum up to 'n' such that the following conditions are true: 
      1) Only numbers 1 through 9 are used
      2) Each number is used at most once
    Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

    EX's:
      k = 3, n = 7 → combinationSumP3(k, n) = [[1, 2, 4]]

      k = 3, n = 9 → combinationSumP3(k, n) = [[1, 2, 6], [1, 3, 5], [2, 3, 4]]

      k = 4, n = 1 → combinationSumP3(k, n) = []

      k = 9, n = 45 → combinationSumP3(k, n) = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
*/

/*
SOLUTION #1 (Part #1)
n = # of integers in input array
t = input target # (i.e. 'target')
m = lowest integer/candidate in input array
+ RUNTIME Complexity: O(n * n^(t/m)) [WST]
+ SPACE Complexity: O(t/m) [WST]
*/

const combinationSum = (arr, target) => {
  let combos = [];
  backtrackToFindCombinations();
  return combos;

  function backtrackToFindCombinations(currIdx = 0, currSum = 0, combo = []) {
    if (currSum === target) {
      combos.push(combo.concat());
      return;
    }

    for (let i = currIdx; i < arr.length; i++) {
      if (arr[i] + currSum > target) continue;
      combo.push(arr[i]);
      backtrackToFindCombinations(i, currSum + arr[i], combo);
      combo.pop();
    }
  }
};

// TESTING:
console.log(combinationSum([2, 3, 6, 7], 7)); // Expect: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // Expect: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // Expect: []
console.log(combinationSum([1], 1)); // Expect: [[1]]
console.log(combinationSum([1], 2)); // Expect: [[1, 1]]


/*
SOLUTION #1 (Part #2)
n = # of integers in input array
t = input target # (i.e. 'target')
+ RUNTIME Complexity: O(n*log(n) + 2^n) → O(2^n)[WST]
+ SPACE Complexity: O(log(n) + n) [WST]
*/

const combinationSumP2 = (arr, target) => {
  let combos = [];
  arr = arr.sort((a, b) => a - b);
  // for (let i = 0; i < arr.length; i++) {
  //   if (i > 0 && arr[i] === arr[i - 1]) continue;
  //   backtrackToFindCombinations(i + 1, arr[i], [arr[i]]);

  // }
  backtrackToFindCombinations();
  return combos; 

  function backtrackToFindCombinations(idx = 0, currSum = 0, combo = []) {
    if (currSum === target) {
      combos.push(combo.concat());
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      // if current integer added to our current sum is LARGER than the target,
      // OR if we're considering adding an integer other than the one we started with and it's a duplicate
      if (arr[i] + currSum > target || (i !== idx && arr[i] === arr[i - 1])) continue;
      combo.push(arr[i]);
      backtrackToFindCombinations(i + 1, currSum + arr[i], combo);
      combo.pop();
    }
  }
};

// TESTING:
// console.log(combinationSumP2([10, 1, 2, 7, 6, 1, 5], 8)); // Expect: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
// console.log(combinationSumP2([2, 5, 2, 1, 2], 5)); // Expect: [[1, 2, 2], [5]]


/*
SOLUTION #1 (Part #3)
k = input integer representing length of combo's we're searching for
t = input target # (i.e. 'target')
P['9' CHOOSE 'k'] = P[n, k] = n! / (k! * (n - k)!)
+ RUNTIME Complexity: O(k * P[9, k]) [WST]
+ SPACE Complexity: O(k + k) → O(k) [WST]
*/

const combinationSumP3 = (k, target) => {
  let combos = [];
  if (target > 45) return combos;
  backtrackToFindCombinations();
  return combos;

  function backtrackToFindCombinations(idx = 1, currSum = 0, combo = []) {
    if (currSum === target && combo.length === k) {
      combos.push(combo.concat());
      return;
    }

    for (let i = idx; i < 10; i++) {
      if (currSum + i > target) break;
      if (combo.length > k) continue;
      combo.push(i);
      backtrackToFindCombinations(i + 1, currSum + i, combo);
      combo.pop();
    }
  }
}

// TESTING:
console.log(combinationSumP3(3, 7)); // Expect: [[1, 2, 4]]
console.log(combinationSumP3(3, 9)); // Expect: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
console.log(combinationSumP3(4, 1)); // Expect: []
console.log(combinationSumP3(9, 45)); // Expect: [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
