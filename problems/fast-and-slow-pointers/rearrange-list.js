"use strict"; // «TAGS» LinkedList, Reverse, Rearrange, Merge, Fast & Slow Pointers

/*
Given the head of a single LinkedList, write a method to modify the LinkedList such that the nodes from the 
second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. 

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

  EX:
    list = 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null → rearrangeLinkedList(list) = 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

    list = 2 -> 4 -> 6 -> 8 -> 10 -> null → rearrangeLinkedList(list) = 2 -> 10 -> 4 -> 8 -> 6 -> null 
*/

/*
n = # of elements/nodes in input list
+ RUNTIME Complexity: O(3n/2) → O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note First, locate the middle node, and then using said reference, reverse the second half of the list. 
Lastly, rearrange the references to the nodes of the first and second list so that they "intertwine".
*/

const rearrangeLinkedList = list => {
  let middle = findMiddleNode(list);
  let secondHalfReversed = reverseLinkedList(middle);
  let head = list;
  // console.log(JSON.stringify(list, null, 2));
  while (head !== null && secondHalfReversed !== null) {
    let temp = head.next;
    head.next = secondHalfReversed;
    head = temp;
    temp = secondHalfReversed.next;
    secondHalfReversed.next = head;
    secondHalfReversed = temp;
  }

  // ⇲ note remove circular reference:
  // if input list has an even number of nodes, the head of the list keeps a reference to the last node of the 
  // second half that's been reversed!
  if (head !== null) head.next = null;
  return list;
};

const findMiddleNode = list => {
  let slow = list, fast = list;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const reverseLinkedList = list => {
  let prev = null;
  while (list !== null) {
    let temp = list.next;
    list.next = prev;
    prev = list;
    list = temp;
  }
  return prev;
}

// TESTING:
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let list = new Node(2, new Node(4, new Node(6, new Node(8, new Node(10, new Node(12))))));
console.log(JSON.stringify(rearrangeLinkedList(list), null, 2)); // Expect: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 