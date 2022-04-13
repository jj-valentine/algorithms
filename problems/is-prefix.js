"use strict"; // «TAGS» Prefix, String, Sentence, Search Word, Companies: Snap, Difficulty: Easy

/*
Given a sentence ('sentence'), that consists of some words separated by a single space, and a "search word", check if 'searchWord' 
is a prefix of any word in 'sentence'. Return the index of the word in sentence (1-indexed) where 'searchWord' is a prefix of this word. 
If 'searchWord' is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return '-1'

  EX:
    sentence = "this problem is an easy problem", searchWord = "pro" → isPrefix(sentence, searchWord) = 2
    Explanation -- "pro" is a prefix of "problem" which is both the 2nd and the 6th word in 'sentence', but we return '2' as it's the smaller index
 */

/*
SOLUTION #1
n = # of characters in input string: 'sentence'
w = # of words in sentence (separated by a space)
s = # of characters in input string: 'searchWord'
+ RUNTIME Complexity: O(n * w * s) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const isPrefix = (sentence, searchWord) => {
  let words = sentence.split(" "); // TC: O(n) [more accurately: O(n * 1), since '1' is the "delimiter" because " " has length '1']
  for (let i = 0; i < words.length; i++) { // TC: O(w)
    // TC: O(s) ['startsWith' saves us time that indexOf() wouldn't because the latter would have to check every character of every string]
    if (words[i].startsWith(searchWord)) return i + 1; 
  }
  return -1;
};


/*
SOLUTION #2
n = # of characters in input string: 'sentence'
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const isPrefixV2 = (sentence, searchWord) => {
  for (let i = 0, j = 1, word = ""; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      word = "";
      ++j;
      continue;
    }
    word += sentence[i];
    if (word === searchWord) return j;
  }
  return -1;
};

// TESTING:
console.log(isPrefix("i love obi juan", "juan")); // Expect: 4
console.log(isPrefix("i love obi juan", "ob")); // Expect: 3
console.log(isPrefix("i love obi juan", "t")); // Expect: -1