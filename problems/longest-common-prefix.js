"use strict"; // TAGS: Prefix, String, Longest, Horizontal/Vertical Scanning, LeetCode: #14, Difficulty: Easy/Medium, Companies: Snap

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string.

  EX's:
    strings = ["flower","flow","flight"] → longestCommonPrefix(strings) = "fl"

    strings = ["dog","racecar","car"] → longestCommonPrefix(strings) = ""
    Explanation -- There is no common prefix among the input strings
*/

/*
SOlUTION #1 
n = # of strings in input array
m = # of characters in longest string
+ RUNTIME Complexity: O(n * m) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: "Horizontal Scanning": First, let's declare a variable that represents the current prefix we're searching for, setting it equal
to the first string in our array. Then, iterate through the rest of the strings in the array -- for each string,
check if the prefix exists in the front of the string (0th index). If it doesn't, cut the last character off 
the prefix and check the string again. If it does, we can move on to the next string in our array. If during the 
course of iterating through our array, our prefix loses all it's characters, it indicates that there's at least one
string that doesn't share a common prefix with the rest, so we return an empty string! Some worst cases would be
if the first string (i.e. default prefix) is the longest string in the array, and if the last string in our array
is the one string that doesn't match the prefixes of the others. Calculating the time complexity is a bit confusing... In the worst case scenario,
we'll need to traverse the entire array of strings because every string will be identical. Furthermore, looping through the array will be O(n),
and we'll also need to check every character for each string ('indexOf'), which will cost O(m) time for every string. 
*/

const longestCommonPrefix = strings => {
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) { // TC: O(n)
    while (strings[i].indexOf(prefix) !== 0) { 
      prefix = prefix.substring(0, prefix.length - 1);  
      if (!prefix.length) return "";  
    }
  }
  return prefix;
}


/*
SOlUTION #2 (First Attempt -- WAY Overcomplicated)
n = # of strings in input array
m = # of characters in longest string
+ RUNTIME Complexity: O(n + 2m + n * m) → O(n * m) [WST]
+ SPACE Complexity: O(m) [WST]
*/

const longestCommonPrefixV2 = strings => {
  if (!strings.length) return "";

  let shortestIdx = 0;
  // O(n)
  strings.reduce((shortestLength, s, i) => {
    if (s.length < shortestLength) {
      shortestIdx = i;
      shortestLength = s.length;
    }
    return shortestLength;
  }, Math.min());

  // O(m)
  let prefixes = {};
  strings[shortestIdx]
    .split("")
    .reduce((prefix, char) => {
      prefix += char;
      prefixes[prefix] = 0; 
      return prefix;
    }, "");
  
  // O(n * m)
  for (let i = 0; i < strings.length; i++) {
    let str = strings[i], prefix = "";
    for (let j = 0; j < str.length; j++) {
      prefix += str[j];
      if (prefixes[prefix] === undefined) {
        if (j === 0) return "";
        else break;
      } else prefixes[prefix]++;
    }
  }

  // O(m)
  let maxFreq = -1;
  return Object.keys(prefixes)
    .reduce((mostFreq, prefix) => {
      if (prefixes[prefix] >= maxFreq) {
        maxFreq = prefixes[prefix];
        mostFreq = prefix;
      }
      return mostFreq;
    }, "");
};

// TESTING: 
console.log(longestCommonPrefix(["flower","flow","flight"])); // Expect: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Expect: ""
console.log(longestCommonPrefix(["hell","hello","ahell"])); // Expect: ""
