"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree and a number ‘s’, find all paths in the tree such that the sum of all the node 
values of each path equals ‘s’. Please note that the paths can start or end at any node but all 
paths must follow the direction from parent to child (top to bottom).
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(2n) → O(n) [WST]
NOTE: As we traverse a given path, keep track of the current sum of all nodes in the path, and create a cache 
of prefix sums which we will check every time we hit a new node. If the current sum equals the target sum, 
or if the absolute difference between the current sum and the target sum exists in the our cache, 
we know we've found a path that adds up to our target sum. Even if we assumed that the values of nodes must 
be positive, since it's possible for there to exist repeated node values in a given path, we unfortunately 
can't save time by starting down another path as soon as we find a path whose sum equals the target sum. 
In other words, there may be more than one combination of nodes that add up to the target sum in a given path.
Our runtime complexity should be O(n) since we only traverse every node in the tree once. Furthermore, our 
space time complexity will be O(2n) → O(n) since in the worst case, our tree will be a LinkedList, in which
case there could be 'n' calls on the call stack at a given point in time. In that case, our prefix sums cache
would also hold up to 'n' total sums, hence O(2n) → O(n). This is a more efficient solution than the one on 
educative.io!
*/

const countPathsThatSum = (root, sum) => {
  let pathsThatSum = 0;
  function traversePaths(node, currentSum = 0, prefixSums = {}) {
    if (node === null) return;
    currentSum += node.value;
    if (currentSum === sum) pathsThatSum++;
    // prefixSums[currentSum] = true;
    traversePaths(node.left, currentSum, prefixSums);
    traversePaths(node.right, currentSum, prefixSums);
  } 
  traversePaths(root);
  return pathsThatSum;
};

// TESTING:
let tree = generateTree([[1], [7, 9], [6, 5, 2, 3]]);
console.log(countPathsThatSum(tree, 12)); // Expect: 3
tree = generateTree([[10], [7, 1], [null, 4, 10, 5]]);
console.log(countPathsThatSum(tree)); // Expect: 3