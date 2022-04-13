"use strict"; // «TAGS» Dynamic Programming (DP), Bottom-Up, Top-Down, Backtracking, Recursive, Permutations, Subsets, Minimum, Fewest, Money, Coins, Change, LeetCode: #322, Difficulty: Medium, Companies: Amazon, Apple, Google, Microsoft, Uber, Zoom

import { perf } from "../../utils/performance-tests.js";

/*
You are given an integer array 'coins' representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money CANNOT be made up by any combination of the coins, return '-1'.
You may assume that you have an infinite number of each kind of coin

  EX's:
    coins = [1, 2, 5], total = 11 → coinChange(coins, total) = 3
      Explanation -- 5 + 5 + 1 = 11
    
    coins = [1], amount = 2 → coinChange(coins, total) = 2

    coins = [2], total = 3 → coinChange(coins, total) = -1

    coins = [1], amount = 0 → coinChange(coins, total) = 0
*/


/*
SOLUTION #1
n = # of integer values in input array: 'coins'
t = total amount of money represented by the input integer: 'total'
+ RUNTIME Complexity: O(total * n) [WST]
+ SPACE Complexity: O(t) [WST]
⇲ note Dynamic Programming (DP) approach ("Bottom-Up")...
*/

const coinChange = (coins, total) => {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= total; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
    }
  }

  return dp[total] === Infinity ? -1 : dp[total]; 
}

/*
SOLUTION #2
n = # of integer values in input array: 'coins'
t = total amount of money represented by the input integer: 'total'
+ RUNTIME Complexity: O(total * n) [WST]
+ SPACE Complexity: O(t) [WST]
⇲ note Memoization approach ("Top-Down")...
*/

const coinChangeV2 = (coins, total) => {
  let cache = {};
  return (function backtrackToFindCombos(moneyLeft = total) {
    if (moneyLeft < 0) return -1;
    if (moneyLeft === 0) return 0;
    if (cache[moneyLeft] !== undefined) return cache[moneyLeft];
   
    let minCoins = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let currCount = backtrackToFindCombos(moneyLeft - coins[i]);
      if (currCount === -1) continue;
      minCoins = Math.min(currCount + 1, minCoins);
    }

    cache[moneyLeft] = (minCoins === Infinity ? -1 : minCoins);
    return cache[moneyLeft];
  })();
};


/*
SOLUTION #3 -- This takes far too long (times out on LC)
n = # of integer values in input array (i.e. 'coins) AKA # of different denominations of coins
t = total amount of money represented by the input integer (i.e. 'total')
+ RUNTIME Complexity: O(total^n) [WST]
+ SPACE Complexity: O(t) [WST]
⇲ note Backtracking like this would be considered a "BRUTE FORCE" method, compared to the memoization approach above (i.e. SOLUTION #2) and even 
more so for the DP approach above that (i.e. SOLUTION #1). The reason our TIME complexity will be O(total^n), is that every coin in the coins array 
could have at most 't'/'c_i' (where 'c_i' is the coin value for index 'i'). So the total number of possible combinations of coins is would be 
('t'/'c_0') *  ('t'/'c_1') * ... * ('t'/'c_n') = (('t'^'n')/'c_1'*'c_2'*...*'c_n') → O(t^n). The worst case for the space complexity would be O(t) 
because the lowest possible coin value will always be '1', and so the deepest possible recursion branch we might follow is just 't'/'1' → 't'.  
*/

const coinChangeV3 = (coins, total) => {
  let minCoins = Infinity
  if (total === 0) return 0;
  if (coins.length === 1) {
    let numCoins = total / coins[0];
    if (numCoins % 1 === 0) return numCoins;
  }

  backtrackToFindCombos();

  function backtrackToFindCombos(moneyLeft = total, idx = 0, coinCombo = []) {
    if (moneyLeft === 0 && coinCombo.length < minCoins) minCoins = coinCombo.length;

    // index always starts at 'idx' so that we can collect the same value coin as many times as we need
    for (let i = idx; i < coins.length; i++) {
      let coinValue = coins[i];
      if (coinValue > moneyLeft || coinCombo.length + 1 > minCoins) continue;
      coinCombo.push(coinValue); 
      // could we technically just keep track of the number of coins we've used (allowing us to save on space complexity)? 
      // we'd have to remember the value of the coin last added during recursion/backtracking, but execution contexts/closure might do that for us
      backtrackToFindCombos(moneyLeft - coinValue, i, coinCombo, minCoins);
      coinCombo.pop();
    }
  }
  return minCoins === Infinity ? -1 : minCoins;

};

// TESTING:
console.log(coinChange([1, 2, 5], 11)); // Expect: 3
console.log(coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)); // Expect: 24

perf(coinChange, [[411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864]);
perf(coinChangeV2, [[411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864]);
// perf(coinChangeV3, [[411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864]); // ⇲ note takes forever...
