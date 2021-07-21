"use strict";

let node = {
  value: null,

  create: function(value) {
    let node = Object.create(this);
    // we have to do this check in case value is 0...
    node.value = (value != null ? value : null);
    return node;
  }
};

function listNode(value, next) {
  let newNode = node.create(value);
  newNode.next = next || null;
  return newNode;
}

function treeNode(value, left, right) {
  let newNode = node.create(value);
  newNode.left = left || null;
  newNode.right = right || null;
  return newNode;
}

const generateList = nodeValues => {
  let isArray = Array.isArray(nodeValues);
  if ((isArray ? nodeValues.length : nodeValues) < 0) return "There Must Be At Least 1 Node in Your List";
  let list = null, curr = list;
  for (let i = 1; i <= (isArray ? nodeValues.length : nodeValues); i++) {
    let newNode = listNode(isArray ? nodeValues[i - 1] : i);
    if (i === 1) {
      list = newNode; 
      curr = list;
    } else {
      curr.next = newNode;
      curr = curr.next;
    }
  }
  return list;
};

const generateTree = nodeValues => {
  if (!Array.isArray(nodeValues)) return "Please Format Your Input As Nodes In Array of Arrays (Each Level/Depth Being A Subarray)";
  let root = treeNode(nodeValues[0][0]);
  if (nodeValues.length === 1) return root;
  let queue = [root]
  for (let l = 1; l < nodeValues.length; l++) { 
    let level = nodeValues[l];
    for (let n = 0; n < nodeValues[l - 1].length; n++) {
      let leftValue = level[2 * n], rightValue = level[(2 * n) + 1];
      let leftNode = (leftValue != null ? treeNode(leftValue) : null);
      let rightNode = (rightValue != null ? treeNode(rightValue) : null);
      let parent = queue.shift();
      if (parent !== null) {
        parent.left = leftNode;
        parent.right = rightNode;
      }
      queue.push(leftNode, rightNode)
    } 
  }
  return root;
}

export {
  generateList,
  generateTree
};