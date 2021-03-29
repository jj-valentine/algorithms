"use strict";

/* 
Given an array of characters where each character represents a fruit tree, you are provided two baskets, 
and your goal is to put the maximum number of fruits in each basket. The only restriction is that each basket 
can have only one type of fruit. 

You can start with any tree, but you can’t skip a tree once you have started. 
You will pick one fruit from each tree until you cannot (i.e. you will stop when you have to pick from a third fruit type).

Write a function to return the maximum number of fruits in both the baskets. 

  EX's:
    fruit = ['A', 'B', 'C', 'A', 'C'] → fruitsInBasket(fruit) = 3
    Explanation -- we can put 2 'C' in one basket and one 'A' in the other → from subarray ['C', 'A', 'C']

    fruit = ['A', 'B', 'C', 'B', 'B', 'C'] → fruitsInBasket(fruit) = 5
    Explanation -- we can put 3 'B' in one basket and two 'C' in the other → start with the second letter: ['B', 'C', 'B', 'B', 'C']

    fruit = ['A', 'B', 'C', 'A', 'C', 'D', 'D', 'D'] → fruitsInBasket(fruit) = 4
    Explanation -- we can put 1 'C' in one basket and three 'D' in the other → from subarray ['C', 'D', 'D', 'D']
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(3) → O(1) [WST]
*/

const fruitsInBaskets = arr => {
  if (arr.length === 0) return 0;
  let fruits = {}, max = 0, currTotal = 0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    fruits[arr[windowEnd]] = (fruits[arr[windowEnd]] || 0) + 1;
    currTotal++;
    if (Object.values(fruits).length === 3) {
      max = Math.max(max, currTotal - 1);
      let fruitToRemove = fruits[arr[windowStart]]
      currTotal -= fruitToRemove;
      delete fruits[arr[windowStart]];
      windowStart += fruitToRemove
    }  
  }
  return Math.max(max, currTotal);
};

// TESTING:
console.log(fruitsInBaskets(["A", "B", "C", "A", "C"])); // Expect: 3
console.log(fruitsInBaskets(["A", "B", "C", "B", "B", "C"] )); // Expect: 5
console.log(fruitsInBaskets(["A", "B", "B", "C", "A", "C", "D", "D", "D"])); // Expect: 4
console.log(fruitsInBaskets(["A", "A", "B", "C", "A", "C"])); // Expect: 3