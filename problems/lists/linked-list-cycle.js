"use strict";

/* 
We are familar with linked lists being linear and terminating as such:

  A->B->C->D

However, linked lists can also have cyclical references:

  A->B->C->D
     ^     |
     |     V
     G<-F<-E

Create a function that accepts a linked list and returns true if the linked list has a cyclical reference.

 * Challenge #1: Do this in linear time
 * Challenge #2: Do this in constant space
 * Challenge #3: Do not mutate the original nodes in any way 
*/


/*
n = # of nodes/elements in list
RUNTIME Complexity [WST]: O(n)
SPACE Complexity [WST]: O(1)
NOTE: Create two references, which both initially point to the head of the list. Every iteration, pointer 'A' takes 
one step, and pointer 'B' two steps down the list. If the given list includes a loop/"cycle", pointer 'A' 
and pointer 'B' will eventually point to the same node.
*/

function Node(val, nxt) {
  this.value = val;
  this.next = nxt || null;
}

function hasCycle(head) {
  let refA = head, refB = head;
  while (refA && refB) {
    refA = refA.next;
    if (!refB.next) return false
    refB = refB.next.next;
    if (refA === refB) return true;
  }
  return false;
}

const linkedListCycle = list => {
  if (!list) return false;
  let p1 = list, p2 = list;
  while (p1 && p2) {
    p1 = p1.next;
    if (!p2.next) return false;
    p2 = p2.next.next;
    if (p1 === p2) return true;
  }
  return false;
}




// TESTING:
let list = new Node("A", new Node("B", new Node("C", new Node("D", new Node("E", new Node("F", new Node("G")))))));

console.log(linkedListCycle(list)); // Expect: false
// create "cycle" from "E" to "A"
list.next.next.next.next.next.next.next = list; 
console.log(hasCycle(list)); // Expect: true
