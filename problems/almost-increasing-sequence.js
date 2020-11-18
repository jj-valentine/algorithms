"use strict";

/* Given a sequence of integers as an array, determine whether it is possible to obtain 
a strictly increasing sequence by removing no more than one element from the array */

/*
n: # of characters in input array/sequence
RUNTIME Complexity: O(n) [WST]
SPACE Complexity: O(1) [BST/WST]
NOTE: Loop through array, and when we find an element that's less than or equal to the previous element,
count the offense, but also check to see if removing the given element OR removing the previous element "fixes"
our sequence -- if NEITHER theoretical removal creates a fix, we know we would have to remove more than one 
element to make our sequence "stricty increasing."
*/

const almostIncreasingSequence = seq => {
  let notIncreasing = 0;
  for (let i = 1; i < seq.length; i++) {
      if (seq[i] <= seq[i - 1]) {
        notIncreasing++;
        // if the case of removing the element seq[i] doesn't fix our sequence,
        // AND the case of removing the element BEFORE seq[i] doesn't fix our sequence, return false 
        if (seq[i - 2] >= seq[i] && seq[i + 1] <= seq[i - 1]) return false;
      }
      if (notIncreasing >= 2) return false;
  }
  return true;
}


console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); // true
