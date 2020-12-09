"use strict";

/* 
Given a singly linked list of integers, determine whether or not it's a palindrome.

NOTE: Try to solve this task in O(n) time using O(1) additional space, where 'n' is the number of elements in 'list'.
 */

/*
SOLUTION #1:
n = # of integers in list
+ RUNTIME Complexity: O(n) [BST/WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Loop through list once and create a "reverse"/"backward" list of integers. Then, loop through the original list
again alongside the reversed list and compare each value.
*/

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

const isListPalindrome = list => {
  let curr = list;
  let backward;
  while (curr) {    
    if (backward === null) {  
      backward = curr;
      backward.next = null;
    } else {
      let node = new Node(curr.value, backward);
      backward = node;
    }    
    curr = curr.next;
  }
  
  while (list && backward) {
    if (list.value !== backward.value) return false;
    list = list.next;
    backward = backward.next; 
  }
  
  return true;
}

/*
SOLUTION #2
n = # of integers in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Create two strings and loop through list. As you loop, for each node, append the value to the beginning of 
  one string, and the end of the other. Aftering looping, check to see if the strings equal one another.
*/

const isListPalindromeV2 = list => {
  if (!list) return true;
  let values = "", reverseValues = "";
  while (list) {
    values = values + list.value;
    reverseValues = list.value + reverseValues;
    list = list.next;
  }  
  return values === reverseValues;
}

// TESTING:
let pal = new Node(1, new Node(2, new Node(2, new Node(1))));
let notPal = new Node(1, new Node(2, new Node(3)));
console.log(isListPalindromeV2(pal));
console.log(isListPalindromeV2(notPal));

