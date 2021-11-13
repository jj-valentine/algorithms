"use strict"; // TAGS: Binary Tree, Node, Array, Subarray, Queue, Levels, Reverse, Breadth First Search (BFS), Difficulty: Easy

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, populate an array to represent its "level-by-level" traversal in reverse order (i.e. lowest level comes first). 
You should populate the values of all nodes in each level from left to right in separate sub-arrays, then return the resulting array of arrays.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2 + 1) → O(n) [WST]
NOTE: Employing the 'Breadth First Search' (BFS) pattern/model, we can emulate our approach to the 
'Traverse Tree' problem, but instead of adding the array for each current level at the end of our results
array, we can append it to the beginning
*/

const reverseTreeTraversal = root => {
  let queue = [root], allLevels = [];
  while (queue.length) {
    let levelSize = queue.length, currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value);
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.unshift(currLevel);
  }
  return allLevels;
};

// TESTING:
let tree = generateTree([[12], [7, 1], [9, null, 10, 5]]);
console.log(reverseTreeTraversal(tree)); // Expect: [[9, 10, 5], [7, 1], [12]]
