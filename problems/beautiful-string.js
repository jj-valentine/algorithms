"use strict";

/* 
A string is said to be beautiful if each letter in the string appears at most as many 
times as the previous letter in the alphabet within the string (i.e. 'b' occurs no more 
times than 'a', 'c' occurs no more times than 'b', etc.) 
Given a string, check whether it is beautiful. 

  EX's:
    str = "bbbaacdafe" → isBeautifulString(str) = true

    str = "aabbb" → isBeautifulString(str) = false

    str = "bbc" → isBeautifulString(str) = false, since 'b' occurs more times than 'a'
*/

const isBeautifulString = str => {
  let cache = str.split('').reduce((lib, char) => {
    let code = char.charCodeAt(0) - 97;
    lib[code] = (lib[code] + 1) || 1;
    return lib;
  }, {...Array(26).fill(0)});
  for (let i = 1; i < 26; i++) {
    if (cache[i - 1] < cache[i]) return false
  }
  return true;
}

// TESTING:
console.log(isBeautifulString('bbbaacdafe'));
console.log(isBeautifulString('aabbb'));
console.log(isBeautifulString('bbc'));

