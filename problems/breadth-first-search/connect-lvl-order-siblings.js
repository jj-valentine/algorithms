"use strict"; // TAGS: Breadth First Search (BFS), Tree, Node, Siblings, Depth, Level Order, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, connect each node with its level order successor. 
The last node of each level should point to a null node.
*/

/*
n = # of nodes in tree  
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2) → O(n) [WST]
*/

const connectLevelOrderSiblings = root => {
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length, nodesLeft = levelSize;
    for (let i = 0; i < levelSize; i++) {
      // NOTE: "OTHER" Way (must declare 'let previous = null' outside of for loop):
        // currentNode = queue.shift();
        // if (previousNode !== null) {
        //   previousNode.next = currentNode;
        // }
        // previousNode = currentNode;
      let dequeued = queue.shift();
      nodesLeft--;
      dequeued.next = nodesLeft ? queue[0]: null;
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
  }
  return root;
};

// TESTING:
let tree = generateTree([[1], [2, 3], [4, 5, null, 6]]); 
console.log(JSON.stringify(connectLevelOrderSiblings(tree), null, 2));
