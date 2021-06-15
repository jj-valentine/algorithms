"use strict"; // TAGS: Breadth First Search, BFS, Tree, Node, Traverse

/*
Given a binary tree, populate an array to represent its "level-by-level" traversal. 
You should populate the values of all nodes of each level from left to right in separate sub-arrays,
then return the resulting array of arrays.
*/

/*
n = # of nodes in tree 
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n + n/2) → O(n) [WST]
NOTE: Do a 'Breadth First' ("level-by-level") traversal of the given tree.
*/

const traverseTree = root => {
  let curr = root;
  let queue = [curr], allLevels = [];
  while (queue.length) {
    let currLevel = [], levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value);
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.push(currLevel);
  }
  return allLevels;
}

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
console.log(traverseTree(tree)); // Expect [[12], [7, 1], [9, 10, 5]]
