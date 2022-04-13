"use strict"; // «TAGS» LinkedList, Node, Sub-List, Reverse, Alternate, K-Elements, Difficulty: Medium

import { generateList } from "../../utils/helper-methods.js";
import { reverseSubList } from "./reverse-sub-list.js";

/*
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

  EX:
    list = 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → null, k = 3  → reverseAlternateKElements(list, k) = 3 → 2 → 1 → 4 → 5 → 6 → 8 → 7 → null
*/

/*
SOLUTION #1
n = # nodes in input list
+ RUNTIME Complexity: O(n + n ^ 2) → O(n ^ 2) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Using the 'reverseSubList' is fun, but inefficient, because the method has to parse up to 'q' elements 
up to 'k'/'n' times 
*/

const reverseAlternateKElements = (head, k) => {
  if (k <= 1) return head;

  let list = reverseSubList(head, 1, k), curr = list;
  let n = 0;
  // get length of list
  while (curr) {
    curr = curr.next;
    n++;
  }
  let multiplier = 2;
  while (multiplier * k < n) {
    let first = 1 + multiplier * k, last = first + k - 1;
    list = reverseSubList(list, first, last);
    multiplier += 2;
  }
  return list;
};


/*
SOLUTION #2
n = # nodes in input list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Here, we are reversing every 'k' segments without doing the extra work of "SOLUTION #1" 
(i.e. re-iterating through the beginning of the list up to the newest sub-list for every sub-list we regerse). 
Instead, we only iterate through the list and hit every node once!
*/

const reverseAlternateKElementsV2 = (head, k) => {
  if (k <= 1) return head;
  
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

    // increment (move pointers) to next sublist that we wish to reverse
    for (let i = 0; curr && i < k; i++) {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};

// TESTING:
let list = generateList(8);
console.log(JSON.stringify(reverseAlternateKElementsV2(list, 2), null, 2)); // Expect: 3 → 2 → 1 → 4 → 5 → 6 → 8 → 7
