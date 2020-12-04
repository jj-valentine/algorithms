"use strict";


function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

function mergeSortedLists(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  let mergedHead = null;
  if (l1.value < l2.value) {
    mergedHead = l1;
    l1 = l1.next;
  } else {
    headHead = l2;
    l2 = l2.next
  }
  let mergedTail = mergedHead;
  while (l1 || l2) {
    if (!l1) {
      mergedTail.next = l2;
      return mergedHead;
    } else if (!l2) {
      mergedTail.next = l1;
      return mergedHead;
    }
    let temp = null;
    if (l1.value <= l2.value) {
      temp = l1;
      l1 = l1.next;
    } else {
      temp = l2;
      l2 = l2.next;
    }
    mergedTail.next = temp;
    mergedTail = temp;
  }
  return mergedHead;
}


let l1 = new Node(4, new Node(8, new Node(15, new Node(19))));
let l2 = new Node(7, new Node(9, new Node(10, new Node(16))));
console.log(JSON.stringify(mergeSortedLists(l1, l2)));
