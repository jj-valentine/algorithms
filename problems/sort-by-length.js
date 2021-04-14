"use strict";

/* 
Write a function that takes an array of strings as an argument and returns a sorted array containing 
the same strings, ordered from shortest to longest.
  
All of the strings in the array passed to your function will be of different lengths, 
so you will not have to decide how to order multiple strings of the same length. 

 EX:
    arr = ["Telescopes", "Glasses", "Eyes", "Monocles"] → sortByLength(arr) = ["Eyes", "Glasses", "Monocles", "Telescopes"]
*/

/*
SOLUTION #1
n = # of elements in array
+ RUNTIME Complexity: O(n) [BST/WST]
+ SPACE Complexity: O(n) [BST/WST]
*/

function sortByLength(array, obj ={}) {
  array.forEach(str => { obj[str.length] = str });
  return Object.values(obj);
}

/*
SOLUTION #2
n = # of elements in array
+ RUNTIME Complexity: O(nlog(n)) [WST]
+ SPACE Complexity: O(1) [WST]
*/

function sortByLengthV2(arr) {
  return arr.sort((s1 ,s2) => s1.length - s2.length);
}

// TESTING:
const arr = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];
console.log('sortByLength:', sortByLength(arr)); // -> ['Eyes', 'Glasses', 'Monocles', 'Telescopes']
console.log('sortByLengthV2:', sortByLengthV2(arr)); // -> ['Eyes', 'Glasses', 'Monocles', 'Telescopes']
