"use strict";

/*
Given two strings, write a function to check if the second one is a rotation of the first, using only one call to isSubstring. The function isSubstring takes in two  strings and returns true if the second string is found in the first, false otherwise.

  EX's:
    h->e->l->l->o === l->l-o->h->e
    h->e->l->l->o !== o->l-l->h->e
*/

/*
n = length of first string (s1)
RUNTIME Complexity: O(n) [WST]
SPACE Complexity: O(1) [WST]
*/

const isSubstring = (s1, s2) => s1.includes(s2);

const stringRotation = (s1, s2) => {
  return isSubstring(s2.concat(s2), s1);
}

// TESTING:
// console.log(isSubstring("hello", "hello")); // -> true
// console.log(isSubstring("hello", "llohe")); // -> false
// console.log(isSubstring("hello", "he")); // -> true
// console.log(isSubstring("hello", "ollhe")); // -> false

// console.log(stringRotation("hello", "hello")); // -> true
// console.log(stringRotation("hello", "llohe")); // -> true
// console.log(stringRotation("hello", "he")); // -> false
// console.log(stringRotation("hello", "ollhe")); // -> false (not a rotation, just an anagram)
