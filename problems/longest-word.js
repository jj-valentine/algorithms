'use strict';

/*
Given a list of words, write a program to find the longest word made of other words in the list.
  EX:
    ['dog', 'dogwalker', 'cat', 'walker'] -> 'dogwalker'
*/

/*
n = # of words in list/array
RUNTIME Complexity: O(n^2) [WST]
SPACE Complexity: O(1) [WST]
NOTE:
*/

const longestWord = arr => {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && string.includes(arr[j])) {
        let regex = new RegExp(arr[j], 'g');
        string = string.replace(regex, '');
      }
      if (string.length === 0) {
        longest = (arr[i] > longest ? arr[i] : longest);
        break; // save ourselves some time
      }
    }
  }
  return longest;
}

// TESTING:
let words = ['dog', 'dogwalker', 'cat', 'walker']
console.log(longestWord(words)); // -> 'dogwalker'
words.push('dogwalkercat');
console.log(longestWord(words)); // -> 'dogwalkercat'
