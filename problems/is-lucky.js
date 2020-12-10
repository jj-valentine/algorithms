"use strict";

/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered 
lucky if the sum of the first half of the digits is equal to the sum of the second half. 
Given a ticket number n, determine if it's lucky or not.

  EX:
    n = 1230 → isLucky(n) = true
    n = 239017 → isLucky(n) = false
*/

const isLucky = n => {
  let arr = Array.from(String(n), Number);
  for (var i = 0, total = 0; i < arr.length / 2; i++) {
    total += arr[i] - arr[arr.length - i - 1];
  }
  return total === 0;
}

console.log(isLuckyV2(1230)); // true
console.log(isLuckyV2(239017)); // false