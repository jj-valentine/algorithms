"use strict"; // TAGS:

/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

NOTE: What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when the needle is an empty string. 
This method is consistent to C's strstr() and Java's indexOf().

  EX's:
    haystack = "hello", needle = "ll" → isNeedleInHaystack(haystack, needle) = 2

    haystack = "aaaaa", needle = "bba" → isNeedleInHaystack(haystack, needle) = -1

    haystack = "", needle = "" → isNeedleInHaystack(haystack, needle) = 0
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const isNeedleInHaystack = (haystack, needle) => {
  if (needle.length === 0) return 0;
  let windowStart = 0, n1 = null;
  for (var windowEnd = 0; windowEnd < haystack.length; windowEnd++) {
    let windowSize = windowEnd - windowStart;
    if (haystack[windowEnd] === needle[0]) n1 = windowEnd;
    if (windowSize === needle.length) return windowStart;
    else if (haystack[windowEnd] !== needle[windowSize]) windowStart = n1 || windowEnd + 1;
  }
  return windowEnd - windowStart === needle.length ? windowStart : -1;
};

// start = 3, end = 5, size = 0
// 
// TESTING:
// console.log(isNeedleInHaystack("hello", "ll")); // Expect: 2
// console.log(isNeedleInHaystack("aaaaa", "bba")); // Expect: -1
// console.log(isNeedleInHaystack("abcd", "")); // Expect: 0
// console.log(isNeedleInHaystack("alabarmabam", "bam")); // Expect: 8
// console.log(isNeedleInHaystack("toaslkowtoastabcd", "toast")); // Expect: 8
// console.log(isNeedleInHaystack("mississippi", "issip")); // Expect: 4
console.log(isNeedleInHaystack("mississippi", "sippj")); // Expect: -1
