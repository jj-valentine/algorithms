"use strict"; // TAGS: Sliding Window

/* 
Given a string, find the length of the longest substring with no repeating characters

  EX's:
    str = "aabccbb" → nonRepeatingSubstring(str) = 3
    EXPLANATION -- the longest substring without any repeating characters is "abc"

    str = "abbbb" → nonRepeatingSubstring(str) = 2
    EXPLANATION -- the longest substring without any repeating characters is "ab"

    str = "abcacde" → nonRepeatingSubstring(str) = 4
    EXPLANATION -- the longest substring without any repeating characters is "acde"
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(26) → O(1) [WST]
*/

const nonRepeatingSubstring = str => {
  if (str == null || str.length === 0) return 0;
  else if (str.length === 1) return 1;
  let windowStart = 0, chars = {}, longestSub = 0;
  for (var windowEnd = 0; windowEnd < str.length; windowEnd++) { 
    // if we've seen the character before AND the index at which we've seen it isn't OUTSIDE (before) the left edge of our window
    // (this happens when we've seen the character before, so it's stored in our object, but the index that we've
    // seen it isn't relevant because our window has already moved past it)
    if (chars[str[windowEnd]] !== undefined && chars[str[windowEnd]] >= windowStart) {
      longestSub = Math.max(longestSub, windowEnd - windowStart);
      windowStart = chars[str[windowEnd]] + 1;
    }
    chars[str[windowEnd]] = windowEnd;
  }
  return Math.max(longestSub, windowEnd - windowStart);
};

// TESTING:
console.log(nonRepeatingSubstring("aabccbb")); // Expect: 3
console.log(nonRepeatingSubstring("aabfcbdeb")); // Expect: 5
console.log(nonRepeatingSubstring("abbbb")); // Expect: 2
console.log(nonRepeatingSubstring("abcacde")); // Expect: 4
console.log(nonRepeatingSubstring("aabccbbdcac")); // Expect: 4
