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
    let maxHeap = Object.create(this);
    maxHeap.heap = heap || [];
    return maxHeap;
  },

  getMax: function() {
    return this.heap[0];
  },

  insert: function(value) {
    this.heap.push(value);
    if (this.heap.length > 1) {
      let curr = this.heap.length - 1;
      while (curr > 0 && this.heap[Math.floor(curr / 2)] < this.heap[curr]) {
        [this.heap[Math.floor(curr / 2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
        curr = Math.floor(curr / 2)
      }
    }
  }
}