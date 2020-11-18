"use strict";

/* You are presented a knapsack with a weight limit, as well as an array of objects, each with its own weight and value. Find the maximum value you can fit into your knapsack given the weight constraint.

  EX:
    let items = [
      {weight: 1, value: 3},
      {weight: 2, value: 4},
      {weight: 3, value: 5},
      {weight: 3, value: 6}
    ];
  * knapsack(items, 3); // returns 7 (from items[0] and items[1])
  * knapsack(items, 5); // returns 10 (from items[1] and items[2])
*/

// BRUTE FORCE (recursion): Check every possible subset of combinations whose weight is less than or equal 
// to max weight. Return the subset with the largest total value.

function knapsack(items, weightAvailable) {

}
