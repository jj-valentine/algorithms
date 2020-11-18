/* 
Given two strings, find the number of common characters between them.

  EX:
    For s1 = "aabcc" and s2 = "adcaa",
    commonCharacterCount(s1, s2) = 3.

    The two strings have THREE common characters (i.e. TWO "a"s and ONE "c") 
*/

const commonCharacterCount = (s1, s2) => {
  let s2Copy = s2;
  return s1.split("").reduce((count, char) => {
    if (s2Copy.includes(char)) {
      s2Copy = s2Copy.replace(char, "");
      count++;
    }
    return count;
  }, 0); 
}

const commonCharacterCountV2 = (s1, s2) => {
  let s1Chars = s1.split("").reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
  return s2.split("").reduce((common, char) => {
    if (s1Chars[char] && s1Chars[char] > 0) {
      common++;
      s1Chars[char] = s1Chars[char] - 1;
    }
    return common;
  }, 0);
}

let s1 = "aabcc", s2 = "adcaa";
console.log(commonCharacterCount(s1, s2));