'use strict';

/* Given a list of words, write a program to find the longest word made of other words in the list.
  EX:
  * ['dog', 'cat', 'walker', 'dogwalker'] -> 'dogwalker' */


function longestWord(arr) {
  let words = {};
  let longest = '';
  for (let i = 0; i < arr.length;  i++) {
    let word = arr[i];
    for (let j = 0; j < arr.length;  j++) {
      if (word.includes(arr[j]) && i !== j) word = word.replace(arr[j], '');
      if (word.length === 0 && arr[i].length > longest.length) longest = arr[j];
    }
  }
  return longest
}


console.log(longestWord(['dog', 'cat', 'walker', 'dogwalker'])); // -> 'dogwalker'
