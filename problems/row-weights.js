"use strict";

/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Array size is at least 1 & all numbers will be positive.
*/

function rowWeights(arr) {

}












/*
SOLUTION #1:
RUNTIME Complexity: O()
SPACE Complexity: O()
⇲ note
*/

const rowWeights = array => {
  return [array.reduce((total, weight, i) => i % 2 === 0 ? total += weight :  total, 0), array.reduce((total, weight, i) => i % 2 !== 0 ? total += weight :  total, 0)];
}

/*
SOLUTION #2:
RUNTIME Complexity: O()
SPACE Complexity: O()
⇲ note
*/

const rowWeights2 = array => array.reduce((a, b, i) => (a[i % 2] += b, a), [0, 0]);

// TESTING:
console.log('rowWeights:', rowWeights([13, 27, 49])); // ->  return (62, 27));
console.log('rowWeights2:', rowWeights2([13, 27, 49])); // ->  return (62, 27));
console.log(rowWeights3([13, 27, 49]))
