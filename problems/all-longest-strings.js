"use strict";

/* 
Given an array of strings, return another array containing all of its longest strings. 

  EX:
    for stringsArray = ["aba", "aa", "ad", "vcd", "aba"],
    allLongestStrings(stringsArray) = ["aba", "vcd", "aba"]
*/

const allLongestStrings = (arr, longest = 0) => {
  return arr.reduce((strings, str) => {
    longest = Math.max(str.length, longest);
    strings[str.length] ? strings[str.length].push(str) : strings[str.length] = [str];
    return strings;
  }, {})[longest];
}

// const allLongestStringsV2 = arr => {
//   let strings = {}, longest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let length = arr[i].length;
//     longest = Math.max(length, longest);
//     strings[length] ? strings[length].push(arr[i]) : strings[length] = [arr[i]];
//   }
//   return strings[longest];
// }




console.log(JSON.stringify(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])));