"use strict"; // «TAGS» Depth First Search (DFS), Tree, Node, Root, Leaf, Recursion, Path, Sum, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree and a number ‘s’, find all paths from root-to-leaf such that the sum of all the node 
values of each path equals ‘s’.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n^2) [WST]
+ SPACE Complexity: O(n*log(n)) [WST]
⇲ note The height of a balanced tree is log(n) and in the worst case scenario, every single path of a fully balanced 
tree adds up to our given sum. Since we know that the maximum number of leaves in a balanced tree is n/2 + 1, in this case
our output array would hold n/2 + 1 paths (since there can only be as many unique paths as there are leaf nodes) 
and each path would be log(n) nodes. Consequently, our space complexity would be that of the number of calls on our 
call stack -- log(n) -- plus (n/2 + 1) * log(n). O(log(n) + n*log(n)) → O(n*log(n)). That being said, the worst case scenario 
for the call stack would be when our tree takes the form of a linked list, in which case we would have up to O(n) 
calls at once. In that scenario, we'd also have an array filled with a single path of 'n' nodes, so our space complexity 
would be O(n + n) → O(2n) → O(n). Considering our time complexity, the time it will take to traverse each and every node is: O(n). 
However, since we also must COPY the array holding the node values belonging to a given path before storing it in the output array, 
our time complexity increases to O(n^2).
*/

const findPathsWithSum = (root, sum) => {
  let pathsThatSum = [];
  findPathsViaDFS(root, sum, []);
  return pathsThatSum;

  function findPathsViaDFS(node, total, currPath) {
    if (node === null || total <= 0) return;
    let currValue = node.value;
    currPath.push(currValue);
    if (total === node.value && node.left === null && node.right === null) pathsThatSum.push([...currPath]);
    findPathsViaDFS(node.left, total - currValue, currPath);
    findPathsViaDFS(node.right, total - currValue, currPath);
    currPath.pop();
  }
};

// TESTING:
let tree = generateTree([[1], [7, 9], [4, 5, 2, 7]]);
console.log(findPathsWithSum(tree, 12));  // Expect: [[1, 7, 4], [1, 9, 2]]
tree = generateTree([[12], [7, 1], [null, 4, 10, 5]]);
console.log(findPathsWithSum(tree, 23)); // Expect: [[12, 7, 4], [12, 1, 10]]




