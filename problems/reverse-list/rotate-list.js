"use strict"; // TAGS: LinkedList, Node, Rotate, Reverse, Sub-List, K-Elements, Difficulty: Medium

import { generateList } from "../../utils/helper-methods.js";

/*
Given a singly linked list, rotate the linked list counter-clockwise by 'k' nodes. Where 'k' is a given positive integer. 
Assume that 'k' is smaller than the count of nodes in a linked list.
  EX:
    list = 1 → 2 → 3 → 4 → 5 → 6 → null, k = 4 → rotateList(list, k) = 5 → 6 → 1 → 2 → 3 → 4 → null
/*

n = # of nodes in list
+ RUNTIME Complexity: O(2n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const rotateList = (head, k) => {
  let curr = head, tail = null, n = 0;
  while (curr) { 
    if (!curr.next) tail = curr;
    n++;
    curr = curr.next;
  }
  
  if (k > n) n += 2;
  k = k % n;
  curr = head;

  // increment 'curr' to point at end of sub-list
  for (let i = 0; i < k; i++) curr = curr.next;

  // attach the tail to the front of the sub-list
  tail.next = head;
  // re-assign head to be end of sub-list
  head = curr.next;
  // detach sub-list
  curr.next = null
  
  return head;
};

// TESTING:
let list = generateList(6);
console.log(JSON.stringify(rotateList(list, 2), null, 2)); // Expect: 3 → 4 → 5 → 6 → 1 → 2
list = generateList(5)
console.log(JSON.stringify(rotateList(list, 8), null, 2)); // Expect: 3 → 4 → 5 → 6 → 1 → 2
