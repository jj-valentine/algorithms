"use strict"; // TAGS: Breadth First Search (BFS), Tree, Node, Traverse, Zig Zag, Alternate, Difficulty: Medium

/*
Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, then right to left for the next level and 
keep alternating in the same manner for the following levels.
*/

/*
n = # of nodes in tree
+ RUNTIME Complexity: O(n + n/2) → O(n) [WST]
+ SPACE Complexity: O(n + n/2) → O(n) [WST]
NOTE: Use 'Breadth First Search' pattern -- Fastest way is to reverse each level's subarray before adding it to the 
result array.
*/

const zigZagTraversal = root => {
  let queue = [root], allLevels = [];
  let leftToRight = true;
  while (queue.length) {
    let levelSize = queue.length, currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let dequeued = queue.shift();
      currLevel.push(dequeued.value); // could have also just 'pushed' OR 'unshifted' node value depending on if 'leftToRight' is true/false (would be much more expensive though)
      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
    allLevels.push(leftToRight ? currLevel : currLevel.reverse());
    leftToRight = !leftToRight;
  }
  return allLevels;
};

// TESTING:
function Node(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5)
tree.right.left = new Node(6);
tree.right.right = new Node(7);
// tree.left.left.left = new Node(8);
// tree.left.left.right = new Node(9);
// tree.left.right.left = new Node(10);
// tree.left.right.right = new Node(11);
// tree.right.left.left = new Node(12);
// tree.right.left.right = new Node(13);
// tree.right.right.left = new Node(14);
// tree.right.right.right = new Node(15);
console.log(zigZagTraversal(tree)); // Expect: [[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8]]
