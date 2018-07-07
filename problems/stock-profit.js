'use strict';

/* You a given an array of stock prices where (a) the indices are the time in minutes past trade opening time (i.e. 9:30a) and (b) the values are the current prices in dollars of Amazon stock.

Write an efficient algorithm for computing the best profit you could make while only making a single purchase and sale of just one Amazon stock.

If no profit is possible, OR if the input is invalid, return 0. */

/*
n = # of elements in array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE:
*/

function stockProfit(arr) {
  if (!arr) return 0;
  let min = Math.min(), profit = 0;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    if (arr[i] - min > profit) profit = arr[i] - min;
  }
  return profit;
}

// TESTING:
const stockPrices = [2000, -700, -200, 400, 200, -100, 500, 700, 1000, 400];
console.log(stockProfit(stockPrices)); // -> 1700
