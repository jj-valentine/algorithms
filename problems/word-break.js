"use strict"; // TAGS: Word, Dictionary, Split, Segment, Recursive, Memoize, LeetCode: #139, Difficulty: Medium (Hard), Companies: Snap

/*
Given an input string and dictionary of words/strings...

  Part #1:
    Implement a function that returns 'true' if the input string can be segmented into a space-separated sequence of one or more 
    of the dictionary words

      EX's:
        str = "leetcode", dict = ["leet","code"] → wordBreak(str, dict) = true
        Explanation -- "leetcode" can be segmented as "leet code"

        str = "applepineapple", dict = ["apple","pineapple"] → wordBreak(str, dict) = true
      
        str = "catsandog", dict = ["cats","dog","sand","and","cat"] → wordBreak(str, dict) = false

  Part #2: 
    Add spaces to the input string in order to construct a sentence where each word in the sentence is a valid dictionary word. 
    Return all such possible sentences in any order.

    EX's:
      str = "catsanddog", dict = ["cat", "cats", "and", "sand", "dog"] → wordBreakP2(str, dict) = ["cats and dog", "cat sand dog"]
      
      str = "pineapplepenapple", dict = ["apple", "pen", "applepen", "pine", "pineapple"] 
        → wordBreakP2(str, dict) = ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]

      str = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"] → wordBreakP2(str, dict) = []

NOTE: In BOTH parts (#1, and #2), the same word in the dictionary may be re-used multiple times in the segmentation!
*/

/*
SOLUTION #1 [Recursion + Memoization] (Part #1)
n = # of words in input array (i.e. the "dictionary")
k = # of characters in (i.e. 'length' of) input string
+ RUNTIME Complexity: O(k^3) [WST]
+ SPACE Complexity: O(max(n, k)) [WST]
NOTE: Can also solve using BFS!
*/

const wordBreak = (str, dict) => {
  let words = new Set(dict); 
  let memo = new Map();

  let result = recurseToFindWords(str);
  console.log(memo);
  return result;
  function recurseToFindWords(word) {
    if (words.has(word)) return true;
    else if (memo.has(word)) return memo.get(word);

    for (let i = 1; i < word.length; i++) {
      let prefix = word.slice(0, i), suffix = word.slice(i);
      if (words.has(prefix) && (words.has(suffix) || recurseToFindWords(suffix))) {
        memo.set(word, true);
        return true;
      }
    }

    memo.set(word, false);
    return false
  }
};

// TESTING:
// console.log(wordBreak("a", ["a"])); // Expect: true
// console.log(wordBreak("leet", ["l", "e", "ee", "le", "lee"])); // Expect: false
// console.log(wordBreak("ccbb", ["bc", "cb"])); // Expect: false
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // Expect: true
// console.log(wordBreak("applepineapple", ["apple", "pineapple"])); // Expect: true
// console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expect: false
// console.log(wordBreak("viscious", ["v","c","i","ou", "s"])); // Expect: true


/*
SOLUTION #1 (Part #2)
n = # of words in input array (i.e. the "dictionary")
k = # of characters in (i.e. 'length' of) input string
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE: 
*/

const wordBreakP2 = (str, dict) => {
  let dictWords = new Set(dict); 

  function findMatchingDictionaryWords(word) {
    
    for (let i = 1; i < word.length; i++) {
      let prefix = word.slice(0, i), suffix = word.slice(i);
      if (dict.has(prefix) && (dict.has(suffix) || findMatchingDictionaryWords(suffix))) {

      }
    }
  }
};






