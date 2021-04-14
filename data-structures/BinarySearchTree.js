"use strict";

// TODO: Add "removeNode" function

/*
+ RUNTIME Complexity 
  * Access -- O(nlog(n)) [AVG] / O(n) [WST]
  * Search -- O(nlog(n)) [AVG] / O(n) [WST]
  * Insertion -- O(nlog(n)) [AVG] / O(n) [WST]
  * Deletion -- O(nlog(n)) [AVG] / O(n) [WST]
+ SPACE Complexity: O(n) [WST] 
NOTE: A 'Binary Search Tree' is an ordered tree data structure. Every parent nodes has at most two children, 
every node to the left of a parent node is always less than the parent, and every node to the right of the parent node 
is always greater than the parent. (using PROTOTYPAL Inheritance here...)
*/

let node = {
  value: null,
  left: null,
  right: null,

  create: function(value, left, right) {
    let node = Object.create(this);
    node.value = value;
    node.left = left || null;
    node.right = right || null;
    return node;
  }
};

let BinarySearchTree = {
  root: null,

  create: function(root) {
    let bst = Object.create(this);
    bst.root = root || null;
    return bst;
  },

  insert: function(value) {
    let newNode = node.create(value);
    let curr = this.root;
    if (!curr) {
      this.root = newNode;
      return this;
    } else {
      while (curr) {
        if (curr.value === value) return undefined;
        else if (value < curr.value) { // if new node's value is less than the current nodes's value, place it to the left
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          }  
          curr = curr.left; // if left is not null, recur until null is found
        } else {
          if (curr.right == null) {
            curr.right = newNode;
            return this;
          }
          curr = curr.right; // if right is not null, recur until null is found
        }
      } 
    }
  },

  find: function(value) {
    let curr = this.root;
    if (!curr) return undefined;
    while (curr) {
      if (value === curr.value) return curr;
      else if (value < curr.value) curr = curr.left;
      else curr = curr.right;
    }
    if (!curr) return false;
    return value === curr.value ? curr : false;
  }
};

// TESTING:
let bst = BinarySearchTree.create();
console.log(bst);
console.log(JSON.stringify(bst.insert(20)));
console.log(JSON.stringify(bst.insert(17)));
console.log(JSON.stringify(bst.insert(13)));
console.log(JSON.stringify(bst.insert(18)));
console.log(JSON.stringify(bst.insert(25), null, 2));
console.log(JSON.stringify(bst.find(17), null, 2));
