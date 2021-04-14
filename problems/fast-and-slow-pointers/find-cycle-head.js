"use strict"; // TAGS: LinkedList, Cycle, Two Pointers, Fast & Slow Pointers

/*
Given the head of a single LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

/*
n = # of nodes in input list
+ RUNTIME Complexity: O(3n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Find the length of the cycle in the list, then create two pointers, the second of which is spaced ahead by 
the same number of nodes in the cycle. When the nodes first meet, they will both be pointing at the head node of the cycle.
Side Note -- the difference between the number of nodes in cycle, and the number of nodes before head of cycle, is the length of the list!
*/

const findCycleHeadInLinkedList = list => {
  let first = list, second = list;
  let nodesAhead = findCycleLength(list);
  // SPACE Complexity: O(n) [WST]
  for (let i = 0; i < nodesAhead; i++) second = second.next;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return second;
};

// SPACE Complexity: O(2n) [WST]
const findCycleLength = list => {
  let p1 = list, p2 = list;
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return calculateLength(p1);
    }
  }

  function calculateLength(intersectionNode) {
    let curr = intersectionNode;
    let length = 0;
    do  {
      curr = curr.next;
      length++;
    } while (curr !== intersectionNode)
    return length;
  }
};

// TESTING:
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let list = new Node("A", new Node("B", new Node("C", new Node("D", new Node("E", new Node("F", new Node("G")))))));
// create "cycle" from "G" to "C"
list.next.next.next.next.next.next.next = list.next.next; 
console.log(findCycleHeadInLinkedList(list)); // Expect: 5
