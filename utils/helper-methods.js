"use strict";

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

const listGenerator = nodeValues => {
  let isArray = Array.isArray(nodeValues);
  if ((isArray ? nodeValues.length : nodeValues) < 0) return "There Must Be At Least 1 Node in Your List";
  let list = null, curr = list;
  for (let i = 1; i <= (isArray ? nodeValues.length : nodeValues); i++) {
    let newNode = new Node(isArray ? nodeValues[i - 1] : i);
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

export {
  listGenerator
};