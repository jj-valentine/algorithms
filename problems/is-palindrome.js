"use strict";

/* 
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For the purpose of this problem, we define empty string as valid palindrome.
  
  EX's:
    str = "A man, a plan, a canal: Panama" → isPalindrome(str) = true
    str = "race a car" → isPalindrome(str) = false
*/

/*
n = # of characters in string
+ RUNTIME Complexity: O(n/2) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Somehow, this is a faster solution than checking for an empty string in the beginning of the function (?)
*/

const isPalindrome = str => {
  let onlyChars = str.replace(/[^a-z0-9]/ig, "");
  for (let i = 0; i < onlyChars.length / 2; i++) {
    if (onlyChars[i].toLowerCase() !== onlyChars[onlyChars.length - 1 - i].toLowerCase()) return false;
  }
  return true;
}


