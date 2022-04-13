"use strict";

/*
Given 'n' strings of length 'k', return groups of anagrams.
*/

/*
n = # of strings in input array
k = # of characters in each strin (i.e. string length)
+ RUNTIME Complexity: O(n!) [BST/WST]
+ SPACE Complexity: O(n!) [BST/WST]
⇲ note This is a permutations problem. For the most efficient time complexity, we can use Heap's algorithm.
*/

const groupAnagrams = arr => {
  const groups = [];
  if (!arr.length) return groups;
  let n = arr.length, k = arr[0].length;
  // iterate through array
    // for each string make a letter count hashmap 
      // for every other string use the letter count map to subtract said letters
        // if a letter isn't found or it's freq goes below 0, move on
  let freq = {};
  arr.forEach((str, idx) => {
    currFreq = {};
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      freq[char] = (freq.charAt(i) || 0) + 1;
    }

    for (let j = idx + 1; j < arr.length; j++) {
      for (let k = 0; k < ) 
    }
  });


  const iterateOverStringsAndLetters = cb => {
    for (let s = 0; s < n; s++) {
      for (let c = 0; c < k; c++) {

      }
    }
};


/* 
{ "c": 1, "a": 1, "t": 1 }, lettersLeft = 0
 */
// TESTING:
console.log(groupAnagrams(["cat", "bat", "act", "tab", "tac", "toe"])); // Expect: [["cat", "act", "tac"], ["bat", "tab"], ["toe"]]

