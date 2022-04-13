"use strict"; // «TAGS»  Binary Tree, Node, Array, Subarray, Queue, Childre, Siblings, Breadth First Search (BFS), Depth, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, connect each node with its level order successor. 
The last node of each level should point to the first node of the next level.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2) → O(n) [WST]
*/

const connectAllLevelOrderSiblings = root => {
  let queue = [root], lastNode = null;
  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      if (lastNode) lastNode.next = dequeued;
      lastNode = dequeued
      if (lastNode.left) queue.push(lastNode.left);
      if (lastNode.right) queue.push(lastNode.right);
    }
  }
  return root;
};

// TESTING:
let tree = generateTree([[1], [2, 3], [4, 5, null, 6]]);
console.log(JSON.stringify(connectAllLevelOrderSiblings(tree), null, 2));
