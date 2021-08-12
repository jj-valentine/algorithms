"use strict"; // TAGS: Word, Dictionary, Split, Segment, Recursive, Memoize, LeetCode: #139, Difficulty: Medium (Hard), Companies: Snap

/*
Given a string 'str' and a dictionary of strings, return 'true' if 'str' can be segmented into a space-separated 
sequence of one or more dictionary words. Note that the same word in the dictionary may be re-used multiple 
times in the segmentation.

  EX's:
    str = "leetcode", dict = ["leet","code"] → wordBreak(str, dict) = true
    Explanation -- "leetcode" can be segmented as "leet code"

    str = "applepineapple", dict = ["apple","pineapple"] → wordBreak(str, dict) = true
  
    str = "catsandog", dict = ["cats","dog","sand","and","cat"] → wordBreak(str, dict) = false
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(n^3) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: Can also use a BFS method!
*/

const wordBreak = (str, dict) => {
  let wordDict = dict.reduce((cache, word) => {
    cache[word] = true;
    return cache;
  }, {});
  let memo = {};

  function wordBreakRecurse(start = 0) {
    if (start === str.length) return true;
    else if (memo[start] !== undefined) return memo[start];
    for (let end = start + 1; end <= str.length; end++) {
      let sub = str.substring(start, end);
      if (wordDict[sub] !== undefined && wordBreakRecurse(end)) return memo[start] = true;
    }
    return memo[start] = false;
  }

  return wordBreakRecurse();
};

// TESTING:
console.log(wordBreak("leet", ["l", "e", "ee", "le", "lee"])); // Expect: false
// console.log(wordBreak("ccbb", ["bc", "cb"])); // Expect: false
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // Expect: true
// console.log(wordBreak("applepineapple", ["apple", "pineapple"])); // Expect: true
// console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // Expect: false