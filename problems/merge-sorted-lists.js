"use strict"; // TAGS:

/*
Merge two sorted Linked Lists into one sorted list
*/

/*
SOLUTION #1
n1 = # of nodes in l1
n2 = # of nodes in l2
+ RUNTIME Complexity: O(n1 + n2) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: 'Iterative' approach -- Create a "sentinel"/initial node that serves as a dummy and allows us to bypass creating
a number of other reference pointers to both save the head of the sorted list, and iterate throught the two given sorted lists.
At the end, we must remember to return the 'next' node in the merged and sorted list so that we avoid including our 
"dummy" node.
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
n1 = # of nodes in l1
n2 = # of nodes in l2
+ RUNTIME Complexity: O(n1 + n2) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: 'Iterative' approach #2 -- If we choose to avoid using a first "dummy" node, we can check which list's
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
  // returns left side if "truthy", else returns right side 
  curr.next = l1 || l2; 
  return head;
}

/*
SOLUTION #3
n1 = # of nodes in l1
n2 = # of nodes in l2
+ RUNTIME Complexity: O(n1 + n2) [WST]
+ SPACE Complexity: O(n1 + n2) [WST]
NOTE: 'Recursive' approach
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
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

let l1 = new Node(4, new Node(5, new Node(8)));
let l2 = new Node(3, new Node(6, new Node(7)));
console.log(JSON.stringify(mergeSortedListsV3(l1, l2)));
