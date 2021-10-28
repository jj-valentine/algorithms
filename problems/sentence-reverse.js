"use strict"; // TAGS: Array, Characters, Words, Sentence, Reverse, In-Place, Constant Space, Difficuly: Easy/Medium

/*
You are given an array of characters that consists of sequences of characters separated by spaces (i.e. string with a space). 
Each space-delimited sequence of characters defines a word. Implement a function that reverses the order of the words 
in the array in the most efficient manner.

  EX:
    arr = [                                        sentenceReverse(arr) = [ 
      "p", "e", "r", "f", "e", "c", "t", "  ",       "p", "r", "a", "c", "t", "i", "c", "e", "  ",
      "m", "a", "k", "e", "s", "  ",            →    "m", "a", "k", "e", "s", "  ",
      "p", "r", "a", "c", "t", "i", "c", "e"         "p", "e", "r", "f", "e", "c", "t"                                   
    ]                                              ]
*/

/*
n = # of elements/characters in input array (i.e. length of input array)
+ RUNTIME Complexity: O(n + 2n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: First, reverse all of the characters/elements (including spaces) in the input array. Then, iterate through array
and when we find a space, reverse the preceding characters up to the start of the given word (keep track of this index)!
*/

const sentenceReverse = arr => {
  let n = arr.length;

  // reverse entire array
  reverseElements(0, n - 1); // TC: O(n) [BST/WST]

  // loop through array, locating spaces -- when we find one, reverse the word preceding it
  let idx = 0, wordStart = 0;
  while (idx <= n) { // TC: O(2n) → O(n) -- go over every element NO MORE THAN twice
    if (arr[idx] === " " || idx === n) {
      reverseElements(wordStart, idx - 1); // TC: O((idx - 1 - wordStart)/2) → O(n/2) → O(n) [WST]
      wordStart = idx + 1;
    }
    idx++;
  }
  return arr;

  function reverseElements(start, end) {
    for (let i = start, counter = 0; i <= (end + start) / 2; i++, counter++) { 
      [arr[i], arr[end - counter]] = [arr[end - counter], arr[i]]; 
    }
  }
};

// TESTING:
let testSentence = ["p", "e", "r", "f", "e", "c", "t", " ", "m", "a", "k", "e", "s", " ", "p", "r", "a", "c", "t", "i", "c", "e"];
console.log(sentenceReverse(testSentence)); // Expect: ["p", "r", "a", "c", "t", "i", "c", "e", "  ", "m", "a", "k", "e", "s", "  ", "p", "e", "r", "f", "e", "c", "t"]                                              
console.log(sentenceReverse(["b", " ", "a"])); // Expect: ["a", " ", "b"]
console.log(sentenceReverse(["b", "a"])); // Expect: ["b", "a"]

