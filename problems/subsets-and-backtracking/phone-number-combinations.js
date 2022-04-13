"use strict"; // «TAGS» Array, String, Permutation, Combination, Recursive, Backtracking, Digit, Phone Number, LeetCode: #17, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Google, Microsoft

/*
Given a string containing digits from '2' to '9' inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

For reference, the mapping of digit to letters should be the same as that on a telephone's buttons. Note that in that case, 
'1' does not map to any letters!

  numbersToLetters = { 
    2: ["a", "b", "c"], 
    3: ["d", "e", "f"], 
    4: ["g", "h", "i"], 
    5: ["j", "k", "l"],
    6: ["m", "n", "o"], 
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  }

  EX's:
    digits = "23" → phoneNumberLetterCombinations(digits) = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

    digits = "2" → phoneNumberLetterCombinations(digits) = ["a", "b", "c"]

    digits = "" → phoneNumberLetterCombinations(digits) = []

/*

n = # of digits in input string (i.e. length of 'digits' string)
+ RUNTIME Complexity: O(n * 4^n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const phoneNumberLetterCombinations = digits => {
  const numbersToLetters = { 
    2: ["a", "b", "c"], 
    3: ["d", "e", "f"], 
    4: ["g", "h", "i"], 
    5: ["j", "k", "l"],
    6: ["m", "n", "o"], 
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  
  let combinations = [];
  if (digits.length < 1) return combinations;
  backtrackToFindCombinations();
  return combinations;
 
  function backtrackToFindCombinations(currDigit = 0, combo = "") {
    if (combo.length === digits.length) {
      combinations.push(combo.slice());
      return;
    }

    let letters = numbersToLetters[digits.charAt(currDigit)];
    for (let j = 0; j < letters.length; j++) {
      combo += letters[j];
      backtrackToFindCombinations(currDigit + 1, combo);
      combo = combo.substring(0, combo.length - 1);
    }
  }  
};

// TESTING:
console.log(phoneNumberLetterCombinations("23")); // Expect: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(phoneNumberLetterCombinations("2")); // Expect: ["a", "b", "c"]
console.log(phoneNumberLetterCombinations("")); // Expect: []
console.log(phoneNumberLetterCombinations("75")); // Expect: ["pj", "pk", "pl", "qj", "qk", "ql", "rj", "rk", "rl", "sj", "sk", "sl"]
