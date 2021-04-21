"use strict"; 

// TODO: add 'remove' method

/*
+ RUNTIME Complexity 
  * Access -- O(1)
  * Search -- O(n)
  * Insertion -- O(log(n))
  * Deletion -- O(log(n))
+ SPACE Complexity: O(n) [WST] 
NOTE: Heaps are primarily used for retrieving a min/max value in O(1) time --
Arrays/LinkedLists can get you these values in O(n) time, while a BST can get you such a value in O(log(n))
*/

let MinHeap = {
  heap: null,

  create: function(heap) {
    let minHeap = Object.create(this);
    minHeap.heap = heap || [];
    return minHeap;
  },

  /* returns the smallest "node"/element*/
  getMin: function() {
    return this.heap[0];
  },

  /* inserts new "node" into 'minHeap' (with proper placement) */
  insert: function(value) {
    this.heap.push(value);
    if (this.heap.length > 1) {
      let curr = this.heap.length - 1;
      // "heapifyUp"
      while (curr > 0 && this.heap[Math.floor(curr / 2)] > this.heap[curr]) {
        [this.heap[Math.floor(curr / 2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
        curr = Math.floor(curr / 2);
      }
    }
  }
};


let minHeap = MinHeap.create();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(0);
minHeap.insert(3);
console.log(JSON.stringify(minHeap, null, 2));