"use strict";

/* 
Given a string, find the shortest possible string which can be achieved by adding 
characters to the end of initial string to make it a palindrome.

  EX's:
    str = "abcdc" → buildPalindrome(str) = "abcdcba"
    str = "ababab" → buildPalindrome(str) = "abababa"
    str = "aaaaba" → buildPalindrome(str) = "aaaabaaaa" 

*/

const buildPalindrome = str => {
  let pal = str;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pal.length / 2; j++) {
      if (pal.charAt(j) !== pal.charAt(str.length - j - 1 + i)) {
        pal = str + str.substring(0, i + 1).split('').reverse().join('');
        break;
      } else if (j === str.length - j - 1 + i || j === str.length - j + i - 2) {
        return pal;
      }
    }
  }
}

console.log(buildPalindrome("abcdc")); // "abcdcba"
console.log(buildPalindrome("ababab")); // "abababa"
// console.log(buildPalindrome("aaaaba")); // "aaaabaaaa"
// console.log(buildPalindrome("abba")); // "abba"
// console.log(buildPalindrome("abaa")); // "abaaba"

// const isPalindrome = str => {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }

// const isPalindromeV2 = str => {
//   return str === str.split('').reverse().join('');
// }


