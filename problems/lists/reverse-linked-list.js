"use strict";

/*
Given the head of a singly linked list, reverse the list, and return the reversed list
*/

/*
SOLUTION #1
n = # of elements in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Iterate through list, individually reversing pointer of each node 
*/

const reverseLinkedList = list => {
  let curr = list;
  let previous = null;
  while (curr !== null) {
    let restOfList = curr.next;
    curr.next = previous;
    previous = curr;
    curr = restOfList
    // console.log(previous);
  }
  return previous;
};

/*
SOLUTION #2
n = # of nodes/elements in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Recurse through list
*/

const reverseLinkedListV2 = list => {
  let curr = list;

}
// TESTING:
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
// console.log(JSON.stringify(list));
console.log(reverseLinkedList(list));