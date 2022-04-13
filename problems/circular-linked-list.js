"use strict";

/*
Given a circular linked list, implement an algorithm which returns the node at the beginning of the loop...

  EX:
    list = A -> B -> C -> D -> E -> C
*/

/*
SOLUTION #1:
n: # of elements/nodes in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [BST/WST]
⇲ note Initialize a cache object (for nodes), and a reference to the head of the given list (so we can avoid mutating our original list). 
Then, iterate through the list, checking to see if the current node is stored in our cache. If the node hasn't been stored yet, 
add it to cache (with current node's "value" property as the key, and its "next" property as the value). If the node exists in our cache, return the current node.
*/

function circularLinkedList(head) {
  let nodes = {};
  let ref = head;
  while (ref) {
    if (!nodes[ref.value]) nodes[ref.value] = ref.next;
    else return ref;
    ref = ref.next;
  }
  return nodes;
}

/*
SOLUTION #2:
n: # of nodes in list
+ RUNTIME Complexity [WST]: O(n)
+ SPACE Complexity [WST]: O(1) -- this solution saves on space complexity!
⇲ note Create two references, both initially pointing to the head of the list. We'll also need a third reference to store the node that we're currently on. 
Upon every step in our iteration of the list, reference 'A' should point to the next node, and pointer 'B' to the "next next" node. Assuming the list takes the form of a loop/cycle, 
reference 'A' and 'B' will eventually point to the same node, which we can assume is the node right AFTER the (current) node -- we can call the current node the node at the "beginning" of the list.
*/

function circularLinkedListV2(head) {
  let refA = head, refB = head, curr = head;
  while (refA && refB) {
    curr = refA;
    refA = refA.next;
    if (!refB.next) return 'list is not circular';
    refB = refB.next.next;
    if (refA === refB) return curr;
  }
}

// TESTING:
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let nodeA = new Node('A');
let nodeB = nodeA.next = new Node('B');
let nodeC = nodeB.next = new Node('C');
let nodeD = nodeC.next = new Node('D');
let nodeE = nodeD.next = new Node('E');
// create circular list by pointing 'E' back to 'C'
nodeE.next = nodeC;

console.log(circularLinkedList2(nodeA));
