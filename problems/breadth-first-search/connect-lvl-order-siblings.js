"use strict"; // TAGS: Breadth First Search (BFS), Tree, Node, Siblings, Depth, Level Order, Difficulty: Medium
/*
Given a binary tree, connect each node with its level order successor. 
The last node of each level should point to a null node.
*/

/*
n = # of nodes in tree  
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const connectLevelOrderSiblings = root => {
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    let curr = null;
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      if (i === 0) curr = dequeued;
      if (i === levelSize - 1) curr.next = null;
      else curr.next = queue[0];
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);

    }
    
  }
  return tree;
};

// TESTING:
function Node(value, left, right, next) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.next = next || null;
}

let tree = new Node(1)
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5)
tree.right.right = new Node(6);
console.log(JSON.stringify(connectLevelOrderSiblings(tree), null, 2));

/* 
    1
  2   3
4  5    6
 */