"use strict"; // TAGS:

/*
Write a function that logs all the permutations of a string
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
⇲ note
*/
  function findStringPermutations(str, prefix = "") {
    let perms = new Set();
    function permutate(str, prefix) {
      if (str.length === 0) perms.add(prefix);
      for (let i = 0; i < str.length; i++) {
        let rest = str.slice(0, i) + str.slice(i + 1);
        permutate(rest, prefix + str[i]);
      }
    }
    permutate(str, prefix);
    return [...perms];
  }
  


// TESTING:

let perm = findStringPermutations("aac");
console.log(perm);


function fib(n, cache = {}) {
  if (cache[n]) return cache[n];
  else {
    if (n < 3) return 1;
    else cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
  }
  return cache[n];
}


let f = fib(5);
// console.log(f)


function strStr(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    while (j < needle.length && needle[j] === haystack[i + j]) j++;
    if (j === needle.length) return i;
  }
  return -1;
}


// let perms = new Set();
//     function permutate(str, prefix) {
//       if (str.length === 0) {
//         perms.add(prefix);
//       } else {
//         for (let i = 0; i < str.length; i++) {
//           let rest = str.slice(0, i) + str.slice(i + 1);
//           permutate(rest, prefix + str[i]);
//         }
//       }
//     }
//     permutate(str, prefix);
//     return [...perms];
