"use strict"; // «TAGS» Array, String, Permutation, Combination, Recursive, Backtracking, Palindrome, LeetCode: #131, Difficulty: Medium, Companies: Amazon, Facebook, Uber

/*
Given a string, partition said string such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of the input string.

  EX's:
    str = "aab" → partitionPalindrome(str) = [["a", "a", "b"], ["aa", "b"]]
    
    str = "a" → partitionPalindrome(str) = [["a"]]
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const partitionPalindrome = str => {
  let results = [];
  backtrackToFindSubstringCandidates(); // TC: O(2^n)
  return results;

  function backtrackToFindSubstringCandidates(start = 0, currSubstrings = []) {
    if (start >= str.length) {
      results.push(currSubstrings.concat());
      return;
    }

    for (let end = start; end < str.length; end++) {
      if (isPalindrome(start, end)) { // TC: O(n)
        currSubstrings.push(str.substring(start, end + 1)); // TC: O(n)
        backtrackToFindSubstringCandidates(end + 1, currSubstrings); 
        currSubstrings.pop();
      } else break;
    }
  }

  function isPalindrome(left, right) {
    while (left < right) if (str.charAt(left++) !== str.charAt(right--)) return false;
    return true;
  }
};

// TESTING:
// console.log(partitionPalindrome("aab"));
// console.log(partitionPalindrome("a"));
// console.log(partitionPalindrome("abcdaabcd"));
