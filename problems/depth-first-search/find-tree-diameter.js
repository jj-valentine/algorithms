"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursive, Path, Diameter, Longest, Difficulty: Medium

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
  let longestDiameter = 0;
  function findLengthOfPath(node) {
    if (node === null) return 0;
    let leftPath = findLengthOfPath(node.left);
    let rightPath = findLengthOfPath(node.right);
    if (leftPath !== 0 && rightPath !== 0) longestDiameter = Math.max(leftPath + rightPath + 1, longestDiameter);
    return Math.max(leftPath, rightPath) + 1;
  }
  findLengthOfPath(root);
  return longestDiameter;
};

// TESTING:
let tree = generateTree([[1], [2, 3], [null, 4, 5, 6]]);
console.log(findTreeDiameter(tree)); // Expect: 5 (diameter of tree is: [4, 2, 1, 3, 6])
tree = generateTree([[1], [2, 3], [null, null, 5, 6], [null, null, null, null, 7, 8, null, 9], [null, null, null, null, null, null, null, null, null, null, null, 10, null, null, null, 11]]);
console.log(findTreeDiameter(tree)); // Expect: 7 (diameter of tree is: [4, 2, 1, 3, 6])
