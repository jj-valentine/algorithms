"use strict";

/*
Given a string, find out if its characters can be rearranged to form a palindrome.

  EX:
    For inputString = "aabb", the output should be
    palindromeRearranging(inputString) = true.

    We can rearrange "aabb" to make "abba", which is a palindrome.
*/


const rearrangePalindrome = str => {
  // can rearrange into a palindrome if there every character but one (the middle) has a pair
  // in other words, the count of each letter but one must be divisible by two
  let chars = str.split('').reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
  let oddChars = Object.keys(chars).reduce((count, char) => {
    return chars[char] % 2 === 0 ? count : ++count;
  }, 0);
  console.log(oddChars);
  
  return oddChars <= 1;
}


console.log(rearrangePalindrome('aabbddlddddel'));




