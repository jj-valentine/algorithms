"use strict"; // TAGS: Decode, String, Stack, Recursion, LeetCode: #394, Difficulty: Medium/Hard, Companies: Amazon, Apple, Facebook, Google, Microsoft, Snap, Uber

/*
Given an encoded string, return its decoded string. The encoding rule is: 'k[encoded_string]', where the encoded_string inside 
the square brackets is being repeated exactly 'k' times. Note that 'k' is guaranteed to be a positive integer. 
You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, 'k'. 
For example, there won't be input like '3a' or '2[4]'!

  EX's:
    str = "3[a]2[bc]" → decodeString(str) = "aaabcbc"
    
    str = "3[a2[c2[b]]]" → decodeString(str) = ""
    
    str = "2[abc]3[cd]ef" → decodeString(str) = "abcabccdcdcdef"
*/

/*
SOLUTION #1
n = # of characters in input string (coded message/string)
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE: Using a Stack...
*/

const decodeString = str => {
  let stack = [], decoded = "", idx = 0;
  const char = i => str.charAt(i);
  while (idx <= str.length || stack.length) {
    let ss = "", n = "";
    if (char(idx) === "]" || idx >= str.length) {
      if (stack.length) {
        let code = stack.pop();
        ss += code["s"].repeat(+code["n"]);
      }
      idx++;
    } else {
      while (/[0-9]/.test(char(idx))) n += char(idx++);
      if (n.length) {
        stack.push({ n: n || "1", s: "" });
        idx++;
      }
      while (/[a-z]/.test(char(idx))) ss += char(idx++);
    }
    stack.length ? stack[stack.length - 1]["s"] += ss : decoded += ss;
  }
  return decoded;
}


// TESTING:
// console.log(decodeString("3[a]2[bc]")); // Expect: "aaabcbc"
// console.log(decodeString("3[a2[c2[b]]]")); // Expect: "acbbcbbacbbcbbacbbcbb" 
// console.log(decodeString("2[abc]3[cd]ef")); // Expect: "abcabccdcdcdef"
// console.log(decodeString("3[z]abc")); // Expect: "zzzabc"
// console.log(decodeString("a3[bc]d")); // Expect: "abccdcdcdxyz"
// console.log(decodeString("c10[ab]")); // Expect: "abccdcdcdxyz"
// console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef")); // Expect: "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"

/*
SOLUTION #2
n = # of characters in input string (coded message/string)
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE: Recursive Approach -- ...
*/

const decodeStringV2 = str => {
 
};