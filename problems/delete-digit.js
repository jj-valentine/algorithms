"use strict";


/* Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number. 
  EX's:
    n = 152 → deleteDigit(n) = 52
    n = 1001 → deleteDigit(n) = 101
*/

const deleteDigit = n => {
  let digits = ("" + n).split('');
  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] < digits[i]) {
      delete digits[i]
      break;
    } else if (digits[i - 1] > digits[i]) {
      delete digits[i];
      break;
    }
  }
  return Number(digits.join(''));
}

// console.log(deleteDigit(222219));
// console.log(deleteDigit(1101));
// console.log(deleteDigit(9529));

