"use strict"; // TAGS: String, Recursion, Backtracking (Not Really Though), Permutation, Lowercase, Uppercase, LeetCode: #784, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Microsoft, Spotify

/*
Given a string, we can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. You can return the output in any order.

  EX's:
    str = "a1b2" → letterCasePermuation(str) = ["a1b2","a1B2","A1b2","A1B2"]
    
    str = "3z4" → letterCasePermutation(str) = ["3z4","3Z4"]
    
    str = "12345" → letterCasePermutation(str) = ["12345"]
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n * 2^n) [WST]
*/

const letterCasePermuation = str => {
  let permutations = [];
  permute();
  return permutations;

  function permute(i = 0, subStr = "") {
    if (i === str.length || subStr === str.length) permutations.push(subStr);
    else {
      let c = str.charAt(i);
      permute(i + 1, subStr + c)
      if (/[a-zA-Z]/.test(c)) {
        let caseChanged = /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase();
        permute(i + 1, subStr + caseChanged);
      }
    }
  }
};

// TESTING:
console.log(letterCasePermuation("a1b2")); // Expect: ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermuation("3z4")); // Expect: ["3z4", "3Z4"]
