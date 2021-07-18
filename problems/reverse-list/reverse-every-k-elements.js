"use strict"; // TAGS: LinkedList, Node, Reverse, Sub-List, Difficulty: Medium

import { generateList } from "../../utils/helper-methods.js";

/*
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

  EX:
    list = 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → null, k = 3  → reverseEveryKElements(list, k) = 3 → 2 → 1 → 4 → 5 → 6 → 8 → 7 → null
*/  

/*
n = # nodes in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: This is just like 'Reverse Alternate K Elements', but easier because we don't need to worry about incrementing
to the next sub-list that we're going to reverse (our pointers are already there because we reverse EVERY sub-list of 'k' elements).
There's an exception to this though... The thing that through me off at first was forgetting to update my 'prev' pointers
to point at the new end of the sub-list I just reversed. 
*/

const reverseEveryKElements = (head, k) => {
  if (!k || k <= 1) return head;

  let curr = head, prev = null;
  while (curr) {
    let lastNodeOfFront = prev;
    let lastNodeOfSubList = curr;

    for (let i = 0, temp = curr; curr && i < k; i++) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    if (lastNodeOfFront) lastNodeOfFront.next = prev;
    else head = prev;

    lastNodeOfSubList.next = curr;
    prev = lastNodeOfSubList;
  }
  return head;
};

// TESTING:
let list = generateList(8); 
console.log(JSON.stringify(reverseEveryKElements(list, 3), null, 2)); // Expect: 3 → 2 → 1 → 6 → 5 → 4 → 8 → 7