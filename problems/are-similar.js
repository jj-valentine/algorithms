"use strict";

/* 
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements 
in one of the arrays.

Given two arrays a and b, check whether they are similar.

  EX:
    a = [1, 2, 3], b = [1, 2, 3] → areSimilar(a, b) = true  
    Arrays are equal, so no need to swap any elements

    a = [1, 2, 3], b = [2, 1, 3] → areSimilar(a, b) = true
    Can obtain 'b' from 'a' by swapping 2 and 1 in 'b'

    a = [1, 2, 2], b = [2, 1, 1] → areSimilar(a, b) = false
    Any swap of any two elements either in 'a' or in 'b' won't make 'a' and 'b' equal
*/

const areSimilar = (a, b) => {
  for (var i = 0, swap = 0; i < a.length && swap < 2; i++) {
    if (a[i] !== b[i]) {
      let j = b.findIndex((el, idx) => {
        return el === a[i] && a[idx] === b[i];
      });
      if (j === -1) return false;
      let temp = b[j];
      b[j] = b[i];
      b[i] = temp;
      swap++;
    }
  }
  return swap < 2;
}

const areSimilarV2 = (a, b) => {
  let aDiff = a.filter((el, i) => el !== b[i]);
  let bDiff = b.filter((el, i) => el !== a[i]);
  return aDiff.length === 0 || (aDiff.length === 2 && aDiff.join('') === bDiff.reverse().join(''));
}

let a = [1, 2, 3, 1, 6, 2]; 
let b = [2, 2, 3, 1, 6, 1];
console.log(areSimilarV2(a, b));


/* You are given an array of integers. On each move you are allowed to increase exactly one of its elements
by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input */
