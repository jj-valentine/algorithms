"use strict"; // TAGS: Binary Tree, Node, Array, Subarray, Queue, Traverse, Minimum, Depth, Breadth First Search (BFS), Difficulty: Easy

import { generateTree } from "../../utils/helper-methods.js";

/*
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2) → O(n) [WST]
NOTE: Use 'Breadth First Search' (BFS) model 
*/

const minimumDepth = root => {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];
  while (queue.length) {
    depth++;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      // take one node out of queue
      let dequeued = queue.shift();
      if (dequeued.left === null && dequeued.right === null) return depth + 1;
      // add that node's children to queue
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
  }
  return depth;
};

// TESTING:
let tree = generateTree([[1], [2, 3], [4, 5, 6, 7], [8, null, 10, null, null, null, null, 9]]);
console.log(minimumDepth(tree)); // Expect: 4
