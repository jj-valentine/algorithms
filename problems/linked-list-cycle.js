/* We are familar with linked lists being linear and terminating as such:

  A->B->C->D

However, linked lists can also have cyclical references:

  A->B->C->D
     ^     |
     |     V
     G<-F<-E

 Create a function that accepts a linked list and returns true if the linked list has a cyclical reference.

 * Challenge #1: Do this in linear time
 * Challenge #2: Do this in constant space
 * Challenge #3: Do not mutate the original nodes in any way */


/*
n =
RUNTIME Complexity [WST]: O(n)
SPACE Complexity [WST]: O(1)
NOTE: Create two references, which both initially point to the head of the list. Every iteration, pointer 'A' takes one step, and pointer 'B' two steps down the list. If the given list includes a loop/"cycle", pointer 'A' and pointer 'B' will eventually point to the same node.
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

// TESTING:
let n1 = new Node('a');
let n2 = n1.next = new Node('b');
let n3 = n2.next = new Node('c');
let n4 = n3.next = new Node('d');
let n5 = n4.next = new Node('e');
let n6 = n5.next = new Node('f');
let n7 = n6.next = new Node('g');
// console.log(JSON.stringify(n1, null, 2));

console.log('no cycle:', hasCycle(n1)); // -> false

n7.next = n2;
console.log(`cycle (from 'g' to 'b'):`, hasCycle(n2)); // -> true
