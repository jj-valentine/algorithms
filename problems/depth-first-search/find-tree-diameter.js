"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Diameter, Longest, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes 
on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.
You can always assume that there are at least two leaf nodes in the given tree.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const findTreeDiameter = root => {
  let maxDiameter = 0;
  if (root === null) return maxDiameter;
  calculateLengthsOfPaths(root);
  return maxDiameter;

  function calculateLengthsOfPaths(node) {
    if (node === null) return 0;
    let leftPath = calculateLengthsOfPaths(node.left);
    let rightPath = calculateLengthsOfPaths(node.right);
    if (leftPath && rightPath) maxDiameter = Math.max(maxDiameter, leftPath + rightPath + 1);
    return Math.max(leftPath, rightPath) + 1;
  }
};


// TESTING:
let tree = generateTree([[1], [2, 3], [null, 4, 5, 6]]);
console.log(findTreeDiameter(tree)); // Expect: 5 (diameter of tree is: [4, 2, 1, 3, 6])
// tree = generateTree([[1], [2, 3], [null, null, 5, 6], [null, null, null, null, 7, 8, null, 9], [null, null, null, null, null, null, null, null, null, null, null, 10, null, null, null, 11]]);
// console.log(findTreeDiameter(tree)); // Expect: 7 (diameter of tree is: [4, 2, 1, 3, 6])
// tree = generateTree([[1], [null, 3], [null, null, 5, 6], [null, null, null, null, 7, 8, null, 9]]);
// console.log(findTreeDiameter(tree)); // Expect: 5 (diameter of tree is: [8, 5, 3, 6, 9])