"use strict"; // TAGS: Binary Tree, Node, Array, Subarray, Queue, Right-View, Levels, Breadth First Search (BFS), Depth, Difficulty: Easy

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, return an array containing nodes in its right view. 
The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
/*

n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2 + n) → O(n) [WST]
*/

const rightViewBinaryTree = root => {
  let queue = [root], rightNodes = []
  while (queue.length) {
    let levelSize = queue.length; 
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      // if we wanted the LEFT view, our conditional would be: "i === 0"
      if (i === levelSize - 1) rightNodes.push(dequeued.value);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }
  return rightNodes;
};

// TESTING:
let tree = generateTree([[12], [7, 1], [null, 9, 10, 5], [null, null, 3]]);
console.log(JSON.stringify(rightViewBinaryTree(tree), null, 2)); // Expect: [12, 1, 5, 3]
