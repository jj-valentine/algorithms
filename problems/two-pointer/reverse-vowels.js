"use strict"; // «TAGS» String, Characters, Array, Set, Cache, Vowels, Two Pointers, Reverse, Swap, Linear TIME & SPACE Complexity, Difficulty: Easy, Companies: Google

/*
Given an input string, "reverse"/"swap" all the vowels (i.e. 'a', 'e', 'i', 'o', and 'u') in the string 
and return it

  EX's:
    str = "hello" → reverseVowels(str) = "holle"

    str = "leetcode" → reverseVowels(str) = "leotcede"
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(n/2) → O(n) [WST]
+ SPACE Complexity: O(5 + n) → O(n) [WST]
*/

const reverseVowels = str => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const chars = str.split("");
  let left = 0, right = str.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++, right--;
  }
  return chars.join("");
};

// TESTING:
console.log(reverseVowels("hello")); // Expect: "holle"
console.log(reverseVowels("leetcode")); // Expect: "leotcede"
