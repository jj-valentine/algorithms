"use strict"; // «TAGS» String, Substring, Longest, 'K' Distinct Characters, Hash Map, Cache, Frequency, Sliding Window, Difficulty: Medium/Hard

/* 
Given a string, find the length of the longest substring in it with no more than 'k' distinct characters

  EX's:
    s = "araaci", k = 2 → longestSubstringWithKDistinctCharacters(s, k) = 4
    EXPLANATION -- the longest substring with no more than '2' distinct characters is "araa"

    s = "araaci", k = 1 → longestSubstringWithKDistinctCharacters(s, k) = 2
    EXPLANATION -- the longest substring with no more than '1' distinct character is "aa"

    s = "cbbebi", k = 3 → longestSubstringWithKDistinctCharacters(s, k) = 5
    EXPLANATION -- the longest substrings with no more than '3' distinct characters are "cbbeb" and "bbebi"
*/

/*
SOLUTION #1
n = # of characters in input string
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(k + 1) → O(k) [WST]
⇲ note Use variable to keep track of # of distinct characters (instead of having to run/call 'Object.keys()' every time 
we need to check the length of our cache of the frequencies of distinct characters)...
*/

const longestSubstringWithKDistinctCharacters = (str, k) => {
  let windowStart = 0, currChars = {}, distinctChars = 0, maxLength = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let lastChar = str.charAt(windowEnd);
    if (!currChars[lastChar]) {
      distinctChars++;
    }
    currChars[lastChar] = (currChars[lastChar] || 0) + 1;
    
    while (distinctChars > k) {
      let firstChar = str.charAt(windowStart++);
      currChars[firstChar]--;
      if (!currChars[firstChar]) {
        delete currChars[firstChar];
        distinctChars--;
      }
    }

    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }

  return maxLength;
};


/*
SOLUTION #2
n = # of characters in input string
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(k + 1) → O(k) [WST]
⇲ note Parse through input string, incrementing each letter's frequency in our 'freq' object/cache, and adding those
letters that have not appeared before. Upon each iteration, compare our window's length with the longest we've recorded so far
and updated our 'longest' variable accordingly. When we find that the number of distinct letters we have in our frequency cache
is larger than 'k', we know we have to shrink our window. We do so by decrementing the frequency of the letter
at the beginning of our window (index: 'windowStart') and moving the start of our window right until it only includes
'k' distinct letters (again).
*/

const longestSubstringWithKDistinctCharactersV2 = (s, k) => {
  let freq = {}, windowStart = 0, longest = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    if (freq[rightChar] === undefined) freq[rightChar] = 0;
    freq[rightChar]++;
    while (Object.keys(freq).length > k) {
      let leftChar = s[windowStart];
      freq[leftChar]--;
      if (freq[leftChar] === 0) delete freq[leftChar];
      windowStart++;
    }
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
};

// TESTING:
console.log(longestSubstringWithKDistinctCharacters("araaci", 2)); // Expect: 4
console.log(longestSubstringWithKDistinctCharacters("araaci", 1)); // Expect: 2
console.log(longestSubstringWithKDistinctCharacters("cbbebi", 3)); // Expect: 5
