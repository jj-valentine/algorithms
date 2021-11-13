"use strict"; // TAGS: Array, Strings, Words, Concatenated, Prefix, Suffix, Recursion, Memoization, DFS, Dynamic Programming, Trie (?), LeetCode: #472, Difficulty: Hard, Companies: Amazon, Microsoft


/*
Given an array of strings (without duplicates), return all the concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

  EX's:
    words = ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"] → findAllConcatenatedWords(words) = ["catsdogcats", "dogcatsdog", "ratcatdogcat"]
      EXPLANATION --- "catsdogcats" can be concatenated by "cats", "dog" and "cats"; "dogcatsdog" can be concatenated by "dog", "cats" and "dog";  
        "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
    
      words =  ["cat", "dog", "catdog"] → findAllConcatenatedWords(words) = ["catdog"]
*/

/*
n = # of strings in input array
+ RUNTIME Complexity: O(n * k^2) [WST]
+ SPACE Complexity: O(max(n, k)) [WST]
NOTE: 
*/

const findAllConcatenatedWords = words => {
  const dict = new Map(words), memo = new Map();

  function doesWordContainOtherWords() {

    for (let word in words) {
      for (let i = 1; i < word.length; i++) {
        let prefix = word.slice(0, i), suffix = word.slice(i);
      }
    }
  }
};






// TESTING:
console.log(findAllConcatenatedWords(["cat", "cats", "catdogkick", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"])); // Expect: ["catsdogcats", "dogcatsdog", "ratcatdogcat"]
console.log(findAllConcatenatedWords(["cat", "dog", "catdog"])); // Expect: ["catdog"]
console.log(findAllConcatenatedWords(["", "a", "b", "ab", "abc"])); // Expect: ["ab"]
console.log(findAllConcatenatedWords(["dog", "dogratwolf", "rat", "dogratcat", "cat"])); // Expect: ["dogratcat"]
console.log(findAllConcatenatedWords(["constructed", "constrictors", "constructor"])); // Expect: []



















// const findAllConcatenatedWords = words => {
//   let dict = new Set(words), memo = new Map();
//   return words.reduce((concatenatedWords, word) => {
//     if (doesPrefixAndSuffixExist(word)) concatenatedWords.push(word);
//     return concatenatedWords;
//   }, []);
  
//   function doesPrefixAndSuffixExist(word) {
//     if (memo.has(word)) return memo.get(word);
//     for (let i = 1; i < word.length; i++) {
//       let prefix = word.slice(0, i), suffix = word.slice(i);
//       if (dict.has(prefix) && (dict.has(suffix) || doesPrefixAndSuffixExist(suffix))) {
//         memo.set(word, true);
//         return true;
//       }
//     }
//     memo.set(word, false);
//     return false
//   }
// };

