"use strict"; // «TAGS» Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
Find the total sum of all the numbers represented by all paths.*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
⇲ note Space complexity is O(n), since in the worst case, the tree is a LinkedList and we'll therefore end
up with O(n) calls on the call stack at once at some point during the algorithms lifecycle
*/

const sumOfPathNumbers = root => {
  let total = 0;
  traversePathsViaDFS(root, "");
  return total;

  function traversePathsViaDFS(root, currSum) {
    if (root === null) return;

    currSum += root.value;
    if (root.left === null && root.right === null) {
      total += +(currSum);
      return;
    }

    traversePathsViaDFS(root.left, currSum);
    traversePathsViaDFS(root.right, currSum);
  }
};

// TESTING:
let tree = generateTree([[1], [7, 9], [null, null, 2, 9]]); 
console.log(sumOfPathNumbers(tree)); // Expect: 408
tree = generateTree([[1], [0, 1], [null, 1, 6, 5]]);
console.log(sumOfPathNumbers(tree)); // Expect: 332

