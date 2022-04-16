"use strict"; // «TAGS» Array, Hash Table, Sorted, 'K' (Variable), Frequency, Compare, "Divide & Conquer", Heap (i.e. Priority Queue),  LC  #347 (Medium),  IK  Sorting, Companies: Amazon, Apple, Facebook, Google, Microsoft, Netflix, Snap, Uber

/*
Given an integer array and an integer 'k', return the 'k' most frequent elements in the array. You may return the answer in any order.

  EX's:
    arr = [1, 1, 1, 2, 2, 3], k = 2 → topKFrequentElements(arr, k) = [1, 2]
    
    arr = [1], k = 1 → topKFrequentElements(arr, k) = [1]

NOTE: As a "follow up", try and make your algorithm's RUNTIME complexity BETTER than O(n·log(n))
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n·log(n)) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: After hashing all the elements in the array alongside their respective frequencies, we can then sort those elements based on said on their frequency 
(i.e. in descending order -- most frequent first) and form an ouptut array with the first (most frequent) 'k' elements. While this ...
*/

const topKFrequentElements = (arr, k) => {
  const freq = arr.reduce((cache, n) => {
    cache[n] = (cache[n] || 0) + 1;
    return cache;
  }, {});

  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  return sorted.slice(0, k);
};


/*
SOLUTION #2
n = # of elements in input array
k = # of elements with larger frequencies (i.e. size/length of output array)
+ RUNTIME Complexity: O(2·n + k·log(k) + (n-k)·log(k)) → O(2·n + n·log(k)) → O(n·log(k)) [WST]
+ SPACE Complexity: O(2·n + k) → O(n) [WST]
NOTE: Use 'MinHeap' to store most frequent 'k' elements...
*/

const topKFrequentElementsV2 = (arr, k) => {
  const freq = arr.reduce((cache, n) => { // TC: O(n), SC: O(n)
    cache[n] = (cache[n] || 0) + 1;
    return cache;
  }, {});
  
  const keys = Object.keys(freq), heap = [keys[0]]; // TC: O(n), SC: O(n)

  for (let i = 1; i < keys.length; i++) {
    if (i < k) insert(keys[i], i); // add first 'k' elements to 'MinHeap'
    else if (freq[keys[i]] > freq[heap[0]]) { // replace "root" (i.e. lowest frequency element) with larger frequency element → "heapify" down
      heap[0] = keys[i];
      heapifyDown(0);
    }
  }

  return heap;

  function insert(key, i) {
    heap.push(key);
    let curr = i, parent = idx => Math.floor((idx - 1)/ 2);
    while (curr >= 1 && freq[heap[parent(curr)]] > freq[heap[curr]]) {
      swap(curr, parent(curr));
      curr = parent(curr);
    }
  }

  function heapifyDown(i) {
    let l = (2 * i) + 1, r = l + 1, min = i;

    if (l < k && freq[heap[l]] < freq[heap[min]]) min = l;
    if (r < k && freq[heap[r]] < freq[heap[min]]) min = r;

    if (min !== i) {
      swap(i, min);
      heapifyDown(min);
    }
  }

  function swap(i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
};

// TESTING:
console.log(topKFrequentElementsV2([1], 1)); // Expect: [1]
console.log(topKFrequentElementsV2([1, 1, 1, 2, 2, 3, 4, 4], 2)); // Expect: [1, 2]
console.log(topKFrequentElementsV2([1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7], 4)); // Expect: [7, 1, 5, 2]