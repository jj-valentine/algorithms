"use strict"; // TAGS:

/*
Return the index of the first occurrence of the string 'needle' in the string 'haystack', or -1 if needle is not part of haystack.

NOTE: What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when the needle is an empty string. 
This method is consistent to C's strstr() and Java's indexOf().

  EX's:
    haystack = "hello", needle = "ll" → isNeedleInHaystack(haystack, needle) = 2

    haystack = "aaaaa", needle = "bba" → isNeedleInHaystack(haystack, needle) = -1

    haystack = "", needle = "" → isNeedleInHaystack(haystack, needle) = 0
*/

/*
h = # of elements in input string (haystack)
n = # of elements in input string (needle)
+ RUNTIME Complexity: O((h - n) * n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE:
*/

const isNeedleInHaystack = (haystack, needle) => {
  if (!needle) return 0;
  if (!haystack || haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
}

// TESTING:
console.log(isNeedleInHaystack("hello", "ll")); // Expect: 2
console.log(isNeedleInHaystack("aaaaa", "bba")); // Expect: -1
console.log(isNeedleInHaystack("abcd", "")); // Expect: 0
console.log(isNeedleInHaystack("alabarmabam", "bam")); // Expect: 8
console.log(isNeedleInHaystack("toaslkowtoastabcd", "toast")); // Expect: 8
console.log(isNeedleInHaystack("mississippi", "issip")); // Expect: 4
console.log(isNeedleInHaystack("mississippi", "sippj")); // Expect: -1
console.log(isNeedleInHaystack("aabaaabaaac", "aabaaac")); // Expect: 4