"use strict"; // «TAGS» String, Recursion, Backtracking (Not Really Though), Permutation, Lowercase, Uppercase, LeetCode: #784, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Microsoft, Spotify

/*
Given a string, we can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. You can return the output in any order.

  EX's:
    str = "a1b2" → letterCasePermuation(str) = ["a1b2","a1B2","A1b2","A1B2"]
    
    str = "3z4" → letterCasePermutation(str) = ["3z4","3Z4"]
    
    str = "12345" → letterCasePermutation(str) = ["12345"]
*/

/*
SOLUTION #1
n = # of characters in input string
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n * 2^n) [WST]
⇲ note Recursive approach...
*/

const letterCasePermuation = str => {
  const permutations = []
  permuteLetters();
  return permutations;

  function permuteLetters(subStr = "") {
    const l = subStr.length;
    if (l === str.length) {
      permutations.push(subStr);
      return;
    }

    let char = str.charAt(l);
    if (/[a-zA-Z]/.test(char)) {
      const capital = char.toUpperCase();
      permuteLetters(subStr + (char === capital ? char.toLowerCase() : capital));
    }

    permuteLetters(subStr + char);
  }
};

/*
SOLUTION #2
n = # of characters in input string
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n * 2^n) [WST]
⇲ note Iterative approach -- Take copies of existing permutations and change the casing of the current element 
if it's a character (i.e. a-z OR A-Z). Then add new permutations into the "results" array.
*/

const letterCasePermuationV2 = str => {
  let permutations = [str];

  for (let i = 0; i < str.length; i++) {
    let el = str.charAt(i);
    if (isNaN(parseInt(el, 10))) {
      let permLength = permutations.length;
      for (let j = 0; j < permLength; j++) {
        let newPerm = permutations[j];
        let caseChanged = /[a-z]/.test(el) ? el.toUpperCase() : el.toLowerCase();
        newPerm = newPerm.substring(0, i) + caseChanged + newPerm.substring(i + 1);
        permutations.push(newPerm);
      }
    }
  }

  return permutations;
}


// TESTING:
console.log(letterCasePermuation("a1b2")); // Expect: ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermuation("3z4")); // Expect: ["3z4", "3Z4"]
