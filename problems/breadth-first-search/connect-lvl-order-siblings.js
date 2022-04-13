"use strict"; // «TAGS»  Binary Tree, Node, Children, Array, Subarray, Queue, Siblings, Level Order, Breadth First Search (BFS), Depth, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
*/

/*
n = # of nodes in tree  
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2) → O(n) [WST]
*/

const connectLevelOrderSiblings = root => {
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      dequeued.next = (i === levelSize - 1 ? null : queue[0]);
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
  }
  return root
};

// TESTING:
let tree = generateTree([[1], [2, 3], [4, null, 5, 6]]); 
console.log(JSON.stringify(connectLevelOrderSiblings(tree), null, 2));
