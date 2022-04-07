"use strict"; // TAGS:

import { listNode, generateList } from "../utils/helper-methods.js";

/*
Given an input array of 'k' sorted (ascending order) linked lists, merge all the lists into one sorted linked list containing every element from all 'k' lists.

  EX's:
    lists = [1 → 4 → 5, 1 → 3 → 4, 2 → 6] → mergeKSortedLists(lists) = 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6 → null
    
    lists = [] (i.e. NO LISTS) → mergeKSortedLists(lists) = []

    lists = [[]] (i.e. ONE EMPTY LIST) → mergeKSortedLists(lists) = []
*/

/*
SOLUTION #1
k = # of input lists
nᵢ = # of nodes in input list 'lᵢ'
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE: Employing a 'Recursive' (i.e. 'Brute Force') approach, we can effectively "merge" two sorted lists at a time. Then, "rinse + repeat" but for every subsequent 
"merging" of two sorted lists, one of them will always be the larger resultant "merged" list from the previous "merging". In other words, the first time we call 
'mergeTwoLists', we'll pass it two sorted "un-merged" lists from the 'lists' array as arguments. Furthermore, all subsequent (i.e. recursive/"internal") calls 
to said function will take as their first argument yet another "un-merged" sorted list from the 'lists' array (given that 'lists' remains non-empty),
while we will instead pass as the second argument the larger "merged" list resulting from the previous "merging" of lists (i.e. recursive call to 'mergeTwoLists').
*/

const mergeKSortedLists = lists => {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];

  return mergeTwoLists(lists.pop(), lists.pop());

  function mergeTwoLists(l1, l2) {
    let sentinel = listNode(-1);
    let curr = sentinel;
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

    curr.next = l1 || l2;
    
    return lists.length > 0 ?  mergeTwoLists(sentinel.next, lists.pop()) : sentinel.next;
  }
};

// TESTING:
let l1 = generateList([1, 4, 5]);
let l2 = generateList([1, 3, 4]);
let l3 = generateList([2, 6]);
console.log(JSON.stringify(mergeKSortedLists([l1, l2, l3]), null, 2)); // Expect: 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6 → null

l1 = generateList([1, 3, 5]);
l2 = generateList([3, 4]);
l3 = generateList([7]);
console.log(JSON.stringify(mergeKSortedLists([l1, l2, l3]), null, 2)); // Expect: 1 → 3 → 3 → 4 → 5 → 7 → null
