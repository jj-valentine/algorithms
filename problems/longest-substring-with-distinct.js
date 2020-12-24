"use strict;"
/* 
Given a string, find the length of the longest substring in it with no more than 'k' distinct characters

  EX's:
    s = "araaci", k = 2 → longestSubstringWithKDistinctCharacters(s, k) = 4
    Explanation -- the longest substring with no more than '2' distinct characters is "araa"

    s = "araaci", k = 1 → longestSubstringWithKDistinctCharacters(s, k) = 2
    Explanation -- the longest substring with no more than '1' distinct characters is "aa"

    s = "cbbebi", k = 3 → longestSubstringWithKDistinctCharacters(s, k) = 5
    Explanation -- the longest substrings with no more than '2' distinct characters are "cbbeb" and "bbebi"
*/

/*
n = # of characters in string
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(k + 1) → O(k) [WST]
NOTE: 
*/

const longestSubstringWithKDistinctCharacters = (s, k) => {
  let lib = {}, lastK = "", distinctLetters = 0, windowStart = 0, longest = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const notSeen = (lib[s[windowEnd]] === undefined);
    if (notSeen) distinctLetters++;
    if (distinctLetters === k) {
      if (notSeen) lastK = s[windowEnd];
      longest = Math.max(longest, windowEnd - windowStart + 1);
    } else if (distinctLetters === k + 1) {
      windowStart = lib[lastK] + 1;
      delete lib[lastK];
      lastK = s[windowStart];
      longest = Math.max(longest, windowEnd - windowStart + 1);
      distinctLetters--;
    }
    lib[s[windowEnd]] = windowEnd;
  }
  return longest;
};

// TESTING:
console.log(longestSubstringWithKDistinctCharacters("araaci", 2)); // Expected: 4
console.log(longestSubstringWithKDistinctCharacters("araaci", 1)); // Expected: 2
console.log(longestSubstringWithKDistinctCharacters("cbbebi", 3)); // Expected: 5
