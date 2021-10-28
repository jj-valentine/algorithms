"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sequence, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const pathWithSequence = (root, seq) => {
  return checkPathsForSequence(root, seq);
  function checkPathsForSequence(node, seq, idx = 0) {
    if (node === null && idx === seq.length) return true;
    else if (node === null || node.value !== seq[idx]) return false;
    return checkPathsForSequence(node.left, seq, idx + 1) || checkPathsForSequence(node.right, seq, idx + 1);
  }
};

// TESTING:
let tree = generateTree([[1], [7, 9], [null, null, 2, 9]]); 
console.log(pathWithSequence(tree, [1, 9, 9])); // Expect: true
tree = generateTree([[1], [0, 1], [null, 1, 6, 5]]);
console.log(pathWithSequence(tree, [1, 0, 6])); // Expect: false
console.log(pathWithSequence(tree, [1, 1, 6])); // Expect: true
