"use strict"; // TAGS: Breadth First Search (BFS), Tree, Node, Traverse, Reverse, Difficulty: Easy

/*
Given a binary tree, populate an array to represent its "level-by-level" traversal in reverse order
(i.e. lowest level comes first). You should populate the values of all nodes in each level 
from left to right in separate sub-arrays, then return the resulting array of arrays.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n + n/2) → O(n) [WST]
NOTE: Employing the 'Breadth First Search' (BFS) pattern/model, we can emulate our approach to the 
'Traverse Tree' problem, but instead of adding the array for each current level at the end of our results
array, we can append it to the beginning.
*/

const reverseTreeTraversal = root => {
  let queue = [root], allLevels = [];
  while (queue.length) {
    let levelSize = queue.length, currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value);
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.unshift(currLevel);
  }
  return allLevels;
};

// TESTING:
function Node(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

let tree = new Node(12)
tree.left = new Node(7);
tree.right = new Node(1);
tree.left.left = new Node(9);
tree.right.left = new Node(10);
tree.right.right = new Node(5);
console.log(reverseTreeTraversal(tree)); // Expect: [[9, 10, 5], [7, 1], [12]]
