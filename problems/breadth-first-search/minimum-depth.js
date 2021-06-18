"use strict"; // TAGS: Breadth First Search (BFS), Tree, Node, Traverse, Minimum, Depth, Difficulty: Easy

/*
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the 
shortest path from the root node to the nearest leaf node.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n/2) → O(n) [WST]
NOTE: Use 'Breadth First Search' (BFS) model 
*/

const minimumDepth = root => {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];
  while (queue.length) {
    depth++;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      // take one node out of queue
      let dequeued = queue.shift();
      if (dequeued.left === null && dequeued.right === null) return depth + 1;
      // add that node's children to queue
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
  }
  return depth;
};

// TESTING:
function Node(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

let tree = new Node(1)
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5)
tree.right.left = new Node(6);
tree.right.right = new Node(7);
tree.left.left.left = new Node(8);
tree.right.right.right = new Node(9)
tree.left.right.left = new Node(10)
console.log(minimumDepth(tree)); // Expect: 4
