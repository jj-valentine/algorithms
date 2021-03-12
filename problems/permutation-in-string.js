"use strict;"

/* 
Given a string and a pattern, find out if the string contains any permutation of the pattern.

  EX's:
    str = "oidbcaf", pattern = "abc" → permutationInString(str, pattern) = true
    Explanation: the string contains "bca" which is a permutation of the given pattern

    str = "odicf", pattern = "dc" → permutationInString(str, pattern) = false
    Explanation: no permutation of the pattern is present in the given string as a substring

    str = "bcdxabcdy", pattern = "bcdyabcdx" → permutationInString(string, pattern) = true
    Explanation: both the string and the pattern are a permutation of each other

    str = "aaacb", pattern = "abc" → permutationInString(string, pattern) = true
    Explanation: the string contains "acb" which is a permutation of the given pattern
*/

/*
SOLUTION #1
n = # of elements in input
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

// str = "abcadact"
// pattern = "cat" 
// matches = 1
// freq = { "c": 0, "a": 0, "t": 1}


const permutationInString = (str, pattern) => {
  let freq = pattern.split("").reduce((lib, char) => {
    lib[char] = (lib[char] || 0) + 1;
    return lib;
  }, {});

  let freqLength = Object.keys(freq).length;
  let windowStart = 0, matches = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (char in freq) {
      freq[char]--;
      if (freq[char] === 0) {
        matches++;
      } 
    } 

    // console.log(freq);
    if (matches === freqLength) return true;
    console.log(freq);
    // if we're past X (pattern.length) characters, must shrink front of window
    if (windowEnd >= pattern.length - 1) {
      let frontChar = str[windowStart];
      windowStart++;
      if (frontChar in freq) {
        if (freq[frontChar] === 0) {
          matches--;
        }
        freq[frontChar]++;
      }
    }
  }
  return false;
};



// TESTING:
console.log(permutationInString("aact", "cat")); // Expect: true
console.log(permutationInString("oidbcaf", "abc")); // Expect: true
console.log(permutationInString("odicf", "dc")); // Expect: false
console.log(permutationInString("bcdxabcdy", "bcdyabcdx")); // Expect: true
console.log(permutationInString("aaacb", "abc")); // Expect: true
