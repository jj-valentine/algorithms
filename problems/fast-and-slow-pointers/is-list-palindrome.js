"use strict"; // «TAGS» LinkedList, Reverse, Palindrome, Fast & Slow Pointers

/* 
Given a singly linked list of integers, determine whether or not it's a palindrome.

⇲ note Your algorithm should use constant space and the input LinkedList should be in the original form 
once the algorithm is finished. The algorithm should have O(n) time complexity where ‘n’ is the number 
of nodes in the LinkedList
*/

/*
SOLUTION #1:
n = # of elements/nodes in list
+ RUNTIME Complexity: O(n) [BST/WST]
+ SPACE Complexity: O(1) [WST]
*/

const isListPalindrome = list => {
  if (list === null || list.next === null) return true;
  let middle = findMiddleNode(list);
  let secondHalfReversed = reverseLinkedList(middle);
  let copySecondHalfReversed = secondHalfReversed;
  let isPalindrome = true;
  while (list !== null && secondHalfReversed !== null) {
    if (list.value !== secondHalfReversed.value) isPalindrome = false;
    list = list.next;
    secondHalfReversed = secondHalfReversed.next;
  }
  reverseLinkedList(copySecondHalfReversed);
  return isPalindrome;
};

const findMiddleNode = list => {
  let slow = list, fast = list;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reverseLinkedList = list => {
  let curr = list, prev = null;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};


/*
SOLUTION #2
n = # of integers in list
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(2n) → O(n) [WST]
⇲ note Create two strings and loop through list. As you loop, for each node, append the value to the beginning of 
one string, and the end of the other. After looping, check to see if the strings equal one another.
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
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let pal = new Node(1, new Node(2, new Node(2, new Node(1))));
let notPal = new Node(1, new Node(2, new Node(3)));
console.log(isListPalindrome(pal)); // Expect: true
console.log(isListPalindrome(notPal)); // Expect: false
console.log(isListPalindromeV2(pal)); // Expect: true
console.log(isListPalindromeV2(notPal)); // Expect: false

