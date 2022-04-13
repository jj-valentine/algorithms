"use strict"; // TAGS:

import { generateList } from "../../utils/helper-methods.js";

/*
Write a function that takes as input TWO sorted linked lists, and returns a sorted list containing all the elements from both lists.
*/

/*
SOLUTION #1
n₁ = # of nodes in input list 'l₁'
n₂ = # of nodes in input list 'l₂'
+ RUNTIME Complexity: O(n₁ + n₂) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note 'Iterative' approach -- Create a "sentinel"/initial node that serves as a dummy and allows us to bypass creating
a number of other reference pointers to both save the head of the sorted list, and iterate throught the two given sorted lists.
At the end, we must remember to return the 'next' node in the merged and sorted list so that we avoid including our "dummy" node.
*/

function mergeSortedLists(l1, l2) {
  let initial = new Node(-1, null);
  let head = initial;
  while (l1 && l2) {
    if (l1.value <= l2.value) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  head.next = l1 || l2;
  return initial.next;
}

/*
SOLUTION #2
n₁ = # of nodes in input list 'l₁'
n₂ = # of nodes in input list 'l₂'
+ RUNTIME Complexity: O(n₁ + n₂) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note 'Iterative' approach (#2) -- If we choose to avoid using a first "dummy" node, we can check which list's
first node has the lesser value, and assign our 'head' pointer to that while iterating past that node in the given list.
We then must also create a temporary pointer to iterate through the rest of both of the lists 
so that at the very end, 'head' will still be pointing to the beginning of the sorted list.
*/

function mergeSortedListsV2(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  let head;
  if (l2.value < l1.value) {
    head = l2;
    l2 = l2.next;
  } else {
    head = l1;
    l1 = l1.next;
  }
  let curr = head;
  while (l1 && l2) {
    if (l1.value <= l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  // return "left side" if 'truthy'; else return "right side"
  curr.next = l1 || l2; 
  return head;
}


/*
SOLUTION #3
n₁ = # of nodes in input list 'l₁'
n₂ = # of nodes in input list 'l₂'
+ RUNTIME Complexity: O(n₁ + n₂) [WST]
+ SPACE Complexity: O(n₁ + n₂) [WST]
⇲ note 'Recursive' approach
*/

const mergeSortedListsV3 = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.value < l2.value) {
    l1.next = mergeSortedListsV3(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeSortedListsV3(l1, l2.next);
    return l2;
  }
}


// TESTING:
const l1 = generateList([4, 5, 8]);
const l2 = generateList([3, 6, 7]);
console.log(JSON.stringify(mergeSortedListsV3(l1, l2))); // Expect: [3, 4, 5, 6, 7, 8]
