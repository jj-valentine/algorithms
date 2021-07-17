"use strict"; // TAGS: LinkedList, Node, Reverse, Sub-List, Difficulty: Medium

import { listGenerator } from "../../utils/helper-methods.js";

/*
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
  
  EX:
    list = 1 → 2 → 3 → 4 → 5 → null, p = 2, q = 4 → reverseSubList(list, p, q) = 1 → 4 → 3 → 2 → 5 → null

*/

/*
n = # of nodes in list
+ RUNTIME Complexity: O(q) [BST] → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const reverseSubList = (head, p, q) => {
  if (p === q) return head;
  
  let curr = head, prev = null, count = 0;
  while (curr && count < p - 1) {
    prev = curr;
    curr = curr.next; 
    count++;
  }

  let lastNodeOfFirstPart = prev;
  // at time of declaration, this is actually the first node of the sub-list (will become last after reversal)
  let lastNodeOfSubList = curr;

  let temp = curr;
  while (curr && count <= q - 1) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    count++;
  }

  // point last node of the first part of list at the new front of sub-list (after reversal)
  if (lastNodeOfFirstPart) lastNodeOfFirstPart.next = prev;
  else head = prev;

  // point the current last node of sub-list (after reversal) at the first node of the second part of list
  lastNodeOfSubList.next = curr;

  return head;
};

// TESTING:
let list = listGenerator(5); 
// console.log(JSON.stringify(reverseSubList(list, 3, 4), null, 2)); // Expect: 1 → 2 → 4 → 3 → 5 
// console.log(JSON.stringify(reverseSubList(list, 1, 1), null, 2)); // Expect: 1 → 2 → 3 → 4 → 5
// console.log(JSON.stringify(reverseSubList(list, 1, 3), null, 2)); // Expect: 3 → 2 → 1 → 4 → 5
// console.log(JSON.stringify(reverseSubList(list, 3, 5), null, 2)); // Expect: 1 → 2 → 5 → 4 → 3

export { 
  reverseSubList
};