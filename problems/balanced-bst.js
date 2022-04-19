"use strict"; // «TAGS» Array, Binary Search Tree (BST), "Height-Balanced", Node, Recursion, Divide-And-Conquer, LC : #108 (Easy), Companies: Amazon, Apple, Facebook

import { treeNode } from "../utils/helper-methods.js";

/*
Given an integer array where the elements are sorted in ascending order, convert it to a "height-balanced" binary search tree.
A "height-balanced" binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
  
  EX's:
    arr = [-10, -3, 0, 5, 9] → generateBalancedBST(arr) = [0, -3, 9, -10, null, 5] ([0, -10, 5, null, -3, null, 9] is also accepted)

    arr = [1, 3] generateBalancedBST(arr) = [3, 1]
      EXPLANATION -- [1, 3] and [3, 1] are both a "height-balanced" BST's
*/

/*
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(log(n)) [WST]
*/

const generateBalancedBST = arr => {
  
  return recurseToFillTree(0, arr.length - 1);

  function recurseToFillTree(left, right) {
    if (left > right) return null;

    // pick "right-middle" node
    let mid = Math.floor((left + right) / 2);
    let nodeValue = arr[mid];
    let currNode = treeNode(nodeValue);

    currNode.left = recurseToFillTree(left, mid - 1);
    currNode.right = recurseToFillTree(mid + 1, right);

    return currNode;
  }
};

// TESTING:
console.log(JSON.stringify(generateBalancedBST([-10, -3, 0, 5, 9]), null, 2)); // Expect: [0, -3, 9, -10, null, 5] (or [0, -10, 5, null, -3, null, 9])
console.log(JSON.stringify(generateBalancedBST([1, 3]), null, 2)); // Expect: [3, 1] (or [1, 3])