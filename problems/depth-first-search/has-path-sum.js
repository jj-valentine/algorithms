"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Difficulty: Easy

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree and a number 's', find if the tree has a path from root-to-leaf such that the sum of 
all the node values of that path equals 's'.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: Worst case for space complexity and call stack is when tree is a LinkedList (i.e. every node has only one child).
Otherwise, it would be log(n) because the depth of the longest path would be our uppoer bound.
*/

const hasPathSum = (root, sum) => {
  if (root === null || sum < 0) return false;
  if (root.value === sum && root.left === null && root.right === null) return true;
  // assuming the sums and values of nodes are positive, checking if the sum is negative at any point 
  // on a given path should save us some time since we can avoid taking that path any further down
  return hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value);
};

// TESTING:
let tree = generateTree([[12], [7, 1], [null, 9, 10, 5], [null, null, 8, 12]]);
// console.log(hasPathSum(tree, 23)); // Expect: true
console.log(hasPathSum(tree, 16)); // Expect: false