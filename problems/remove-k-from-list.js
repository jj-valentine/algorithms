"use strict";

/*
Given a singly linked list of integers 'list' and an integer 'k', remove all elements from 'list' that have a value equal to 'k'.

NOTE: Try to solve this task in O(n) time using O(1) additional space, where 'n' is the number of elements in the list.
 */

/*
SOLUTION #1:
n = # of integers in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

function removeKFromList(list, k) {
  // remove matching nodes from front of list
  while (list && list.value === k) list = list.next;
  let curr = list;
  while (curr && curr.next) {
    if (curr.next.value === k) {
      curr.next = curr.next.next;
    } else { 
      curr = curr.next;
    }
  }
  return list;
}

/*
SOLUTION #2:
n = # of integers in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Solved RECURSIVELY
*/

const removeKFromListV2 = (list, k) => {
  if (list === null) return null;
  else {
    list.next = removeKFromListV2(list.next, k);
    return list.value === k ? list.next : list;
  }
}

// TESTING:
// let list = new Node(3, new Node(1, new Node(2, new Node(3, new Node(4, new Node(3))))));
// console.log(JSON.stringify(list));
// console.log(JSON.stringify(removeKFromList(list, 3)));


