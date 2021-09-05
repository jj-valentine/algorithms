"use strict"; // TAGS: Subsets, Permutations, Combinations, Recursive, Backtracking, String, Balance, Parentheses, Brackets, LeetCode: #22, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Google, Microsoft, Snap, Uber

/*
For a given number ‘n’, write a function to generate all combination of ‘n’ pairs of balanced parentheses.

  EX's:
    n = 2 → balancedParentheses(n) = ["(())", "()()"]
        
    n = 3 → balancedParentheses(n) = ["[][][]", "[][[]]", "[[]][]", "[[][]]", "[[[]]]"]
*/

/*
SOLUTION #1
n = input integer
+ RUNTIME Complexity: O(2^(2n)) → O(4^n) [WST] -- This might be O(4^n / sqrt(n)), but not sure how we get there...
+ SPACE Complexity: O(2 * n) → O(n) [WST]
NOTE: Recursive approach -- FIRST attempt
*/

const balancedParentheses = n => {
  let comboLength = 2 * n, combos = [];
  findCombos();
  function findCombos(currCombo = "[", bracketsOpen = 1, spacesLeft = comboLength) {
    if (spacesLeft < bracketsOpen) return;
    else if (currCombo.length === comboLength && bracketsOpen === 0) combos.push(currCombo);
    else {
      if (bracketsOpen === spacesLeft) findCombos(currCombo + "]", bracketsOpen - 1, spacesLeft - 1);
      else if (bracketsOpen === 0) findCombos(currCombo + "[", bracketsOpen + 1, spacesLeft - 1);
      else {
        findCombos(currCombo + "]", bracketsOpen - 1, spacesLeft - 1);
        findCombos(currCombo + "[", bracketsOpen + 1, spacesLeft - 1);
      }
    }
  }
  return combos;
};


/*
SOLUTION #2
n = input integer
+ RUNTIME Complexity: O(2^(2n)) → O(4^n) [WST] -- This might be O(4^n / sqrt(n)), but not sure how we get there...
+ SPACE Complexity: O(2 * n) → O(n) [WST]
NOTE: Backtracking approach...
*/

const balancedParenthesesV2 = n => {
  let combos = [];
  backtrackToFindCombos();
  return combos;

  function backtrackToFindCombos(currCombo = "[", open = 1, closed = 0) {
    if (currCombo.length === 2 * n) {
      combos.push(currCombo);
      return;
    }

    if (open < n) {
      backtrackToFindCombos(currCombo + "[", open + 1, closed);
      currCombo.slice(0, -1);
    }

    if (open > closed) {
      backtrackToFindCombos(currCombo + "]", open, closed + 1);
      currCombo.slice(0, -1);
    }
  }
};

// TESTING:
console.log(balancedParenthesesV2(0)); // Expect: []
console.log(balancedParenthesesV2(1)); // Expect: ["[]"]
console.log(balancedParenthesesV2(2)); // Expect: ["[][]", "[[]]"]
console.log(balancedParenthesesV2(3)); // Expect: ["[][][]", "[][[]]", "[[]][]", "[[][]]", "[[[]]]"]
