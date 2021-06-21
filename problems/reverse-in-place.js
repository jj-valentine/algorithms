"use strict";

/*
Write a function to reverse an array in place, where "in place" means "without creating a new object in memory".

  In some languages, strings are mutable (like in Ruby). In other languages,
  such as Python and JavaScript, strings are immutable, meaning they CANNOT
  be changed after they're created.

  Since strings are immutable in JS, we will be reversing an array of characters instead.

NOTE: DO NOT USE THE BUILT IN REVERSE METHOD!
*/

/*
n: # of characters in input array
RUNTIME Complexity: O(n/2) → O(n)
SPACE Complexity: O(1) [BST/WST]
*/

const reverseInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// TESTING:
const array = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseInPlace(array)); // -> ['e', 'd', 'c', 'b', 'a']
