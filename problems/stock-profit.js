"use strict"; // TAGS: Stock Prices, Profit, Max, LeetCode: #121, Difficulty: Easy, Companies: Snap

/*
You are given an array prices where prices[i] is the price of a given stock on the 'i'th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day 
in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
  
  EX's:
    prices = [7, 1, 5, 3, 6, 4] → stockProfit(prices) = 5
    Explanation -- Buy on day #2 (price = 1) and sell on day #5 (price = 6), profit = 6 - 1 = 5
      Note that buying on day #2 and selling on day #1 is not allowed because you must buy before you sell

    prices = [7, 6, 4, 3, 1] → stockProfit(prices) = 0
    Explanation -- In this case, no transactions are made, so the max profit = 0
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Only need to track the current minimum as you iterate through the array, since the difference between
that price and the current one is the only one that matters (i.e. the profit you must compare to the previous largest profit)
*/

const stockProfit = prices => {
  let min = Math.min();
  return prices.reduce((maxProfit, price) => {
    min = Math.min(min, price);
    let potentialProfit = price - min;
    if (potentialProfit > maxProfit) maxProfit = potentialProfit;
    return maxProfit;
  }, 0);
};

// TESTING:
console.log(stockProfit([7, 1, 5, 3, 6, 4])); // Expect: 5
console.log(stockProfit([7, 6, 4, 3, 1])); // Expect: 0