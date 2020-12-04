"use strict";

/*
Given a single input string, write a function that produces all possible anagrams
of a string and outputs them as an array. At first, don't worry about repeated strings. 
What time complexity is your solution?

BONUS: De-duplicate your return array without using uniq().
*/

/*
n: length of input string
+ RUNTIME Complexity: O(n!) [BST/WST]
+ SPACE Complexity: O(n!) [BST/WST]
NOTE: This is a permutations problem. For the most efficient time complexity, we can use Heap's algorithm.
*/

const anagrams = str => {
  if (str.length < 2) return [str];
  let perms = [];

}

// TESTING:
// console.log(anagrams('abc')); // → ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// console.log(anagrams('pose')); // → ['pose', 'poes', 'psoe', 'pseo', 'peos', 'peso', 'opse', 'opes', 'ospe', 'osep', 'oeps', 'oesp', 'spoe', 'speo', 'sope', 'soep', 'sepo', 'seop', 'epos', 'epso', 'eosp', 'eops', 'espo', 'esop']

// console.log("abc".slice(1,3));
// let s = ["c","a","t"]
// s.splice(0, 1)
// console.log(s);

