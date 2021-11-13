"use strict"; // TAGS: Binary Tree, Node, Array, Subarray, Queue, Traverse, Reverse, Zig Zag, Alternate, Levels, Breadth First Search (BFS), Difficulty: Easy/Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, then right to left for the next level and 
keep alternating in the same manner for the following levels.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n + n/2 + 1) → O(n) [WST]
+ SPACE Complexity: O(n/2 + n/2 + 2) → O(n) [WST]
NOTE: Use 'Breadth First Search' pattern -- Fastest way is to reverse each level's subarray before adding it to the 
result array.
*/

const zigZagTraversal = root => {
  let queue = [root], allLevels = [];
  let leftToRight = true;
  while (queue.length) {
    let levelSize = queue.length, currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value); // could have also just 'pushed' OR 'unshifted' node value depending on if 'leftToRight' is true/false (would be much more expensive though)
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.push(leftToRight ? currLevel : currLevel.reverse());
    leftToRight = !leftToRight;
  }
  return allLevels;
};

// TESTING:
let nodeValues = [[1], [2, 3], [4, 5, 6, 7]];
let tree = generateTree(nodeValues);
console.log(zigZagTraversal(tree)); // Expect: [[1], [3, 2], [4, 5, 6, 7]]
nodeValues.push([8, 9, 10, 11, 12, 13, 14, 15]);
tree = generateTree(nodeValues);
console.log(zigZagTraversal(tree)); // Expect: [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8]]

