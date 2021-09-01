"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Sequence, Maximum, Difficulty: Hard

import { generateTree } from "../../utils/helper-methods.js";

/*
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.
A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. 
The path must contain at least one node.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const findMaximumSumOfPaths = root => {
  let maxSum = 0;
  function findPathSum(node) {
    if (node === null) return 0;
    let leftPathSum = findPathSum(node.left);
    let rightPathSum = findPathSum(node.right);
    // Q: why are we adding leftPathSum and rightPathSum (wouldn't that be account for TWO paths)?
    if (leftPathSum !== 0 && rightPathSum !== 0) maxSum = Math.max(leftPathSum + rightPathSum + node.value, maxSum);
    return Math.max(leftPathSum, rightPathSum) + node.value;
  }
  findPathSum(root);
  return maxSum;
};

// TESTING:
let tree = generateTree([[1], [2, 3], [null, 4, 5, 6]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 16 (path with mas sum is: [4, 2, 1, 3, 6])
tree = generateTree([[1], [2, 3], [null, null, 5, 6], [null, null, null, null, 7, 8, null, 9], [null, null, null, null, null, null, null, null, null, null, null, 10, null, null, null, 11]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 52 (path with mas sum is: [10, 8, 5, 3, 6, 9, 11])
tree = generateTree([[1], [2, 3], [1, 3, 5, 6], [null, null, null, null, 7, 8, null, 9]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 31 (path with mas sum is: [10, 8, 5, 3, 6, 9, 11])