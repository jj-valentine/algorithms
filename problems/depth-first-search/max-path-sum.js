"use strict"; // «TAGS» Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Sequence, Maximum, Difficulty: Hard

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
  let maxValuePath = -1;
  findMaxValuePaths(root);
  return maxValuePath;

  function findMaxValuePaths(node) {
    if (node === null) return 0;
    let leftTotal = findMaxValuePaths(node.left);
    let rightTotal = findMaxValuePaths(node.right);
    if (leftTotal && rightTotal) maxValuePath = Math.max(maxValuePath, leftTotal + rightTotal + node.value);
    return Math.max(leftTotal, rightTotal) + node.value;
  }
};

// TESTING:
let tree = generateTree([[1], [2, 3], [null, 4, 5, 6]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 16 (path with mas sum is: [4, 2, 1, 3, 6])
tree = generateTree([[1], [2, 3], [null, null, 5, 6], [null, null, null, null, 7, 8, null, 9], [null, null, null, null, null, null, null, null, null, null, null, 10, null, null, null, 11]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 52 (path with mas sum is: [10, 8, 5, 3, 6, 9, 11])
tree = generateTree([[1], [2, 3], [1, 3, 5, 6], [null, null, null, null, 7, 8, null, 9]]);
console.log(findMaximumSumOfPaths(tree)); // Expect: 31 (path with mas sum is: [10, 8, 5, 3, 6, 9, 11])