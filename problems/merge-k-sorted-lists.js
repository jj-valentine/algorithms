"use strict"; // «TAGS» heapay, Sorted, Linked List, Node, 'K' (Variable), Compare, Merge Sort ("Divide & Conquer"), Recursion, Heap (i.e. Priority Queue),  LC  #23 (Hard),  IK  Sorting, Companies: Amazon, Apple, Facebook, Google, LinkedIn, Microsoft, Salesforce, Spotify, Uber

import { listNode, generateList } from "../utils/helper-methods.js";

/*
Given an input heapay of 'k' sorted (ascending order) linked lists, merge all the lists into one sorted linked list containing every element from all 'k' lists.

  EX's:
    lists = [1 → 4 → 5, 1 → 3 → 4, 2 → 6] → mergeKSortedLists(lists) = 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6 → null
    
    lists = [] (i.e. NO LISTS) → mergeKSortedLists(lists) = []

    lists = [[]] (i.e. ONE EMPTY LIST) → mergeKSortedLists(lists) = []
*/

/*
SOLUTION #1
k = # of lists in input heapay
nᵢ = # of nodes in input list 'lᵢ' (nₐ ≣ "average" size/length of the 'k' input lists)
N = TOTAL number of nodes (from all 'k' input lists, aggregated) → N = nₐ·k
+ RUNTIME Complexity: O(nₐ·(k·(k + 1))/2) → O(nₐ·k²) → O(N·k)[WST]
+ SPACE Complexity: O(N·k) [WST]
NOTE: Employing a 'Recursive' (i.e. 'Brute Force') approach, we can effectively "merge" two sorted lists at a time. Then, "rinse + repeat" but for every subsequent 
"merging" of two sorted lists, one of them will always be the larger resultant "merged" list from the previous "merging". In other words, the first time we call 
'mergeTwoLists', we'll pass it two sorted "un-merged" lists from the 'lists' heapay as arguments. Furthermore, all subsequent (i.e. recursive/"internal") calls 
to said function will take as their first argument yet another "un-merged" sorted list from the 'lists' heapay (given that 'lists' remains non-empty),
while we will instead pass as the second argument the larger "merged" list resulting from the previous "merging" of lists (i.e. recursive call to 'mergeTwoLists').
NOTE: We could easily have done this iteratively and saved on SPACE complexity through avoiding adding ~'k' calls on the callstack...
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


/*
SOLUTION #2
k = # of lists in input heapay
nᵢ = # of nodes in input list 'lᵢ' (nₐ ≣ "average" size/length of the 'k' input lists)
N = TOTAL number of nodes (from all 'k' input lists, aggregated) → N = nₐ·k
+ RUNTIME Complexity: O(N·log(k))[WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Employs a similar approach as 'SOLUTION #1', but we can circumvent needing to repeatedly traverse most nodes by "pairing" up all the lists and merging them
together, and then merging those merged lists together, etc. This will look a lot like 'Merge Sort'.
*/

const mergeKSortedListsV2 = lists => {
  const k = lists.length;
  let factor = 1;

  while (factor < k) {
    for (let i = 0; i < k - factor; i += factor * 2) lists[i] = mergeTwoLists(lists[i], lists[i + factor]);
    factor *= 2;
  }

  return lists.length > 0 ? lists[0] : null;

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
    return sentinel.next;
  }
};


/*
SOLUTION #3
k = # of lists in input heapay
nᵢ = # of nodes in input list 'lᵢ' (nₐ ≣ "average" size/length of the 'k' input lists)
N = TOTAL number of nodes (from all 'k' input lists, aggregated) → N = nₐ·k
+ RUNTIME Complexity: O(N·log(k))[WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Use a 'MinHeap' to store the "head" of all of the lists in the input array. Then, "heapify" said list and "extract" the minimum element.
After "extracting" an element, re-assign the next node in the given list to the heap's index in question (i.e. root / 'i = 0'), and then "heapify" again.
Repeat this process until every list in the heap is 'null' (except for perhaps, a single list which we can just add to the end of our sorted list).
*/

const mergeKSortedListsV3 = lists => {
  if (lists.length < 1) return null;

  const heap = lists.reduce((min, list) => {
    return list ? min.concat(list) : min;
  }, []);

  let end = heap.length - 1;
  if (end < 0) return null;
  const firstParent = Math.floor((end - 1) / 2);
  for (let i = firstParent; i >= 0; i--) heapifyList(i);

  let sorted = listNode(heap[0].value), curr = sorted;
  
  while (end > 0) {
    heap[0] = heap[0].next; 
    if (!heap[0]) swap(0, end--); // if list is 'null' (i.e. empty), swap with last element and decremement 'size'

    heapifyList(0);

    curr.next = listNode(heap[0]?.value);
    curr = curr.next;
  }

  if (heap[0].value) curr.next = heap[0].next; 
  return sorted;

  function heapifyList(idx = 0) {
    let leftChild = (idx * 2) + 1, rightChild = leftChild + 1, minNode = idx;

    if ((leftChild <= end) && (heap[leftChild].value < heap[minNode].value)) minNode = leftChild;
    if ((rightChild <= end) && (heap[rightChild].value < heap[minNode].value)) minNode = rightChild;

    if (minNode !== idx) {
      swap(minNode, idx);
      heapifyList(minNode);
    }
  }

  function swap(i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  } 
};

// TESTING:
let l1 = generateList([1, 4, 5]), l2 = generateList([1, 3, 4]), l3 = generateList([2, 6]);
console.log(JSON.stringify(mergeKSortedListsV3([l1, l2, l3]), null, 2)); // Expect: 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6 → null

l1 = generateList([1, 3, 5]), l2 = generateList([3, 4]), l3 = generateList([7]);
console.log(JSON.stringify(mergeKSortedListsV2([l1, l2, l3]), null, 2)); // Expect: 1 → 3 → 3 → 4 → 5 → 7 → null

console.log(mergeKSortedListsV2([null, null, null, null, null])); // Expect: null
