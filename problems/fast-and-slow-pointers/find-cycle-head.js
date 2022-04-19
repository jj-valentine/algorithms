"use strict"; // «TAGS» LinkedList, Cycle, Two Pointers, Fast & Slow Pointers, LC : #142 (Medium), Companies: Amazon, Microsoft

import { generateList } from "../../utils/helper-methods";

/*
Given the head of a singly linked list that contains a "cycle", write a function to find the starting node of the cycle
*/

/*
n = # of nodes in input list
+ RUNTIME Complexity: O(3·n) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Find the length of the cycle in the list, then create two pointers, the second of which is spaced ahead by 
the same number of nodes as there are in the cycle. When the nodes first meet, they will both be pointing to the head node of the cycle.
*/

const findCycleHeadInLinkedList = list => {
  let first = list, second = list;
  let nodesAhead = findCycleLength(list);

  for (let i = 0; i < nodesAhead; i++) second = second.next; // SC: O(n) [WST]

  while (first !== second) {
    first = first.next;
    second = second.next;
  }

  return second;
};

const findCycleLength = list => {
  let p1 = list, p2 = list;
  while (p2 && p2.next) { // SC: O(2·n) [WST]
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) return calculateLength(p1);
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
let list = generateList(["A", "B", "C", "D", "E", "F", "G"])
list.next.next.next.next.next.next.next = list.next.next; // create "cycle" from "G" to "C"
console.log(findCycleHeadInLinkedList(list)); // Expect: Node { value: 'C' next: ... }
