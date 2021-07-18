
"use strict"; // TAGS: LinkedList

import { generateList } from "../utils/helper-methods.js";

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  EX's:
    l1 = [2,4,3], l2 = [5,6,4] → addTwoNumbers(l1, l2) = [7,0,8]
    EXPLANATION -- 342 + 465 = 807.

    l1 = [0], l2 = [0] → addTwoNumbers(l1, l2) = [0]
  
    l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] → addTwoNumbers([8,9,9,9,0,0,0,1])
*/

/*
n = # of nodes/elements in the longest list [i.e. Math.max(l1.length, l2.length)]
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE:
*/

const addTwoNumbers = (l1, l2) => {
  let total = null, curr = total;
  let carryOver = 0;
  while (l1 || l2) {
    let newNode = new Node();
    let l1Value = 0, l2Value = 0;
    if (l1) l1Value = l1.value;
    if (l2) l2Value = l2.value;
    let sum = l1Value + l2Value + carryOver;
    newNode.value = sum % 10;
    carryOver = Math.floor(sum / 10);
    if (total) {
      curr.next = newNode;
      curr = curr.next;
    } else {
      total = newNode;
      curr = total;
    }
    if (l1 && l1.next) l1 = l1.next;
    else l1 = null;
    if (l2 && l2.next) l2 = l2.next;
    else l2 = null;
  }
  if (curr.value === 0) curr.next = new Node(1);
  return total;
};

// TESTING:
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let l1 = generateList([2, 4, 3]);
let l2 = generateList([5, 6, 4]);
console.log(JSON.stringify(addTwoNumbers(l1, l2))); // Expect: list (7 → 0 → 8)
l1 = generateList([5, 8, 6, 9, 9, 9]);
l2 = generateList([5, 3, 4]);
console.log(JSON.stringify(addTwoNumbers(l1, l2))); // Expect: list (0 → 2 → 1 → 0 → 0 → 0 → 1)