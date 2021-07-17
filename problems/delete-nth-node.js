"use strict"; // TAGS: LinkedList, Node, Two Pointers, Delete, Nth, Difficulty: Medium

import { listGenerator } from "../utils/helper-methods.js";

/*
Given the head of a linked list, remove the 'n'th node from the end of the list and return its head 
*/

/*
n = # of nodes in input list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Use two pointers, one 'n' steps ahead of the first. When the leading pointer reaches the end of the list, 
we know that the following pointer will be pointing to the node preceding the one that must be deleted 
(unless 'n' is equal to the size of the list, in which case we return all of the list EXCEPT FOR the first node).
*/

const deleteNthNode = (head, n) => {
  let curr = head, nAhead = head, currLength = 0;
  if (head.next === null) return null;
  while (nAhead) {
    if (currLength > n) {
      curr = curr.next;
    }
    currLength++;
    nAhead = nAhead.next;
  }
  
  if (currLength === n) return head.next;  
  curr.next = curr.next.next;

  return head;
};

// TESTING:
let list = listGenerator([1, 2, 3])
console.log(deleteNthNode(list, 3)); // Expect: 2 → 3
list.next.next = null;
console.log(deleteNthNode(list, 1)); // Expect: 1