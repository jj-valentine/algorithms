"use strict;"

/*
SOLUTION #1
n = # of elements in input
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const separateWords = str => {
  let lib = str.replace(/\/n/g, "")
    .match(/[a-z,A-z]*/g)
    .reduce((freq, word) => {
      if (word.length) freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {});

  return Object.keys(lib)
    .sort((a, b) => lib[b] - lib[a])
    .reduce((result, word) => {
      result += `\"${word}\": ${lib[word]},\n`
      return result;
    }, "");
};

// TESTING:
// console.log(separateWords("some stuff!/ntest /ntest yada yada./n Another.stuff sentence here /nAnother";));