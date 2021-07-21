"use strict"; // TAGS: Depth First Search (DFS), Tree, Node, Root, Leaf, Recursive, Path, Sum, Difficulty: Medium

import { generateTree } from "../../utils/helper-methods.js";

/*
Given a binary tree and a number ‘s’, find all paths from root-to-leaf such that the sum of all the node 
values of each path equals ‘s’.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n*log(n)) [WST]
+ SPACE Complexity: O(log(n) * log(n)) [WST]
NOTE: The height of a balanced tree is log(n) and in the worst case scenario, every single path of a fully balanced 
tree adds up to our given sum. Since we know that the maximum number of leaves in a balanced tree is n/2 + 1, in this case
our output array would hold n/2 + 1 paths (since there can only be as many unique paths as there are leaf nodes) 
and each path would be log(n) nodes. Consequently, our space complexity would be that of the number of calls on our 
call stack -- log(n) -- plus (n/2 + 1) * log(n). O(log(n) + n*log(n)) → O(n*log(n)). That being said, the worst case scenario 
for the call stack would be when our tree takes the form of a linked list, in which case we would have up to O(n) 
calls at once. In that scenario, we'd also have an array filled with a single path of 'n' nodes, so our space complexity 
would be O(n + n) → O(2n) → O(n). Furthermore, O(n*log(n)) is obviously the true worst case scenario for space complexity. 
Considering our time complexity in said worst case scenario, if we assume the tree is balanced and filled-out as before,
the time it takes to store our nodes in the output array will also be n*log(n). This is because, worst case, every path that 
leads to a leaf node will add up to the desired sum, there are n/2 + 1 leaf nodes so that will take O(n) time. Also, since we must
first COPY the array holding nodes on a given path before storing it in the output array, our time complexity increases to 
n*log(n) due to the fact that a single path will hold the same number of nodes as the height of our tree: log(n).
*/

const findPathsWithSum = (root, sum) => {
  let allPaths = [];
  function findPaths(node, currentSum, currentPath = []) {
    if (node === null) return allPaths;
    currentPath.push(node.value);
    if (node.left === null && node.right === null && node.value === currentSum) allPaths.push([...currentPath]);
    else {
      findPaths(node.left, currentSum - node.value, currentPath);
      findPaths(node.right, currentSum - node.value, currentPath);
    }
    currentPath.pop();  
  }
  return findPaths(root, sum) || allPaths;
};


// TESTING:
let tree = generateTree([[1], [7, 9], [4, 5, 2, 7]]);
console.log(JSON.stringify(findPathsWithSum(tree, 12), null, 2));  // Expect: [[1, 7, 4], [1, 9, 2]]
tree = generateTree([[12], [7, 1], [null, 4, 10, 5]]);
console.log(JSON.stringify(findPathsWithSum(tree, 23), null, 2)); // Expect: [[12, 7, 4], [12, 1, 10]]
