"use strict"; // «TAGS»  Binary Tree, Node, Array, Subarray, Queue, Breadth First Search (BFS), Traverse, Difficulty: Easy

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, populate an array to represent its "level-by-level" traversal. 
You should populate the values of all nodes of each level from left to right in separate sub-arrays,
then return the resulting array of arrays.
*/

/*
n = # of nodes in tree 
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2 + n/2 + 2) → O(n) [WST]
⇲ note Do a 'Breadth First' ("level-by-level") traversal of the given tree
*/

const traverseTree = root => {
  let queue = [root], allLevels = [];
  while (queue.length) {
    let currLevel = [], levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value);
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.push(currLevel);
  }
  return allLevels;
}

// TESTING:
let tree = generateTree([[12], [7, 1], [9, null, 10, 5]])
console.log(traverseTree(tree)); // Expect: [[12], [7, 1], [9, 10, 5]]
