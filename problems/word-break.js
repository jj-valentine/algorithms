"use strict"; // TAGS: String, Substring, Word, Dictionary, Split, Segment, Prefix/Suffix, Recursive, Backtracking, DP (Dynamic Programming), DFS (Depth First Search), BFS (Breadth First Search), Trie, Memoization, LeetCode: #139/#140, Difficulty: Medium/Hard, Companies: Amazon, Apple, Facebook, Google, Microsoft, Salesforce, Snap, Uber

/*
Given an input string and dictionary of words/strings...

  Part #1:
    Implement a function that returns 'true' if the input string can be segmented into a space-separated sequence of one or more 
    of the dictionary words

      EX's:
        str = "leetcode", dict = ["leet", "code"] → wordBreak(str, dict) = true
        Explanation -- "leetcode" can be segmented as "leet code"

        str = "applepineapple", dict = ["apple", "pineapple"] → wordBreak(str, dict) = true
      
        str = "catsandog", dict = ["cats", "dog", "sand", "and", "cat"] → wordBreak(str, dict) = false

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
  let dictWords = new Set(dict), memo = new Map();
  return splitStringToFindWords(str);

  function splitStringToFindWords(word) {
    if (dictWords.has(word)) return true;
    else if (memo.has(word)) return memo.get(word);
    for (let i = 0; i < word.length; i++) { 
      let prefix = word.substring(0, i), suffix = word.substring(i);
      if (dictWords.has(prefix) && (dictWords.has(suffix) || splitStringToFindWords(suffix))) {
        memo.set(word, true);
        return true;
      }
    }

    memo.set(word, false);
    return false;
  }
};

// TESTING (Part #1):
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
+ RUNTIME Complexity: O(k^3 + n^k) [WST] → Q: OR is it: k^2 * 2^k (LeetCode)...
+ SPACE Complexity: O(k + k^2) [WST]
NOTE: Employ "Top-Down" Dynamic Programming (DP)...
*/

const wordBreakP2 = (str, dict) => {
  const memo = new Map();

  return findWordsThatMakeSentences(str);
 
  function findWordsThatMakeSentences(word) {
    if (!word.length) return [""];
    if (memo.has(word)) return memo.get(word);
    
    let sentences = [];
    dict.forEach(prefix => { // TC: O(k * n) [WST] -- Recursive Piece 
      if (word.startsWith(prefix)) { // TC: O(k) [WST]
        let suffix = word.slice(prefix.length); // TC: O(k) [WST]
        let paths = findWordsThatMakeSentences(suffix);

        paths.forEach(subsentence => { // TC: n^k [WST]
          const optionalSpace = (subsentence.length ? " " : "");
          sentences.push(prefix + optionalSpace + subsentence); // TC: O(n) [?]
        });
      }
    });

    memo.set(word, sentences);
    return sentences;
  }
};

// TESTING (Part #2):
console.log(wordBreakP2("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])) // Expect: ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]
console.log(wordBreakP2("catsanddog", ["cat", "cats", "and", "sand", "dog"])) // Expect: ["cats and dog", "cat sand dog"]
console.log(wordBreakP2("catsandog", ["cats", "dog", "sand", "and", "cat"])) // Expect: []

