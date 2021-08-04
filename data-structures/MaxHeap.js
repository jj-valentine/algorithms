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

function MaxHeap(heap) {
  this.heap = heap || [];
  MaxHeap.prototype.peek = () => this.heap[0];

  MaxHeap.prototype.insert = value => {
    this.heap.push(value);
    if (this.heap.length > 1) {
      let curr = this.heap.length - 1;
      while (curr > 0 && this.heap[Math.floor(curr / 2)] < this.heap[curr]) {
        [this.heap[Math.floor(curr / 2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
        curr = Math.floor(curr / 2)
      }
    }
  }

  MaxHeap.prototype.remove = () => {

  }
}

let maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(1);
maxHeap.insert(5);
console.table(maxHeap);

export default MaxHeap;