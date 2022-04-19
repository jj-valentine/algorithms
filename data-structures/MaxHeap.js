"use strict"; 

/*
+ RUNTIME Complexity 
  * Access (i.e. 'peek') -- O(1)
  * Search -- O(n)
  * Insertion -- O(log(n))
  * Deletion (i.e. 'extractMax') -- O(log(n))
+ SPACE Complexity: O(n) [WST] 
NOTE: Heaps are a form of 'Priority Queue' and are primarily used for retrieving a min/max value in O(1) time --
Arrays/LinkedLists can get you these values in O(n) time, while a BST can get you such a value in O(log(n))
*/

class MaxHeap {
  constructor(heap) {
    this.heap = heap || [];
    this.size = this.heap.length || 0;
  }

  #parent(i) {
    return Math.floor((i - 1) / 2);
  }

  #leftChild(i) {
    return (2 * i) + 1;
  }

  #rightChild(i) {
    return (2 * i) + 2;
  }

  #swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  peek() {
    return this.size ? this.heap[0] : undefined;
  }

  insert(key) {
    this.heap[this.size++] = key;
    this.buildMaxHeap();
  }
 
  extractMax() {
    if (this.size < 1) return null;
    const max = this.peek();
    this.#swap(0, --this.size);
    this.heapifyDown(0);
    return max;
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapifyDown(i) {
    let l = this.#leftChild(i), r = this.#rightChild(i);
    let largest = i;

    if (l < this.size && this.heap[l] > this.heap[largest]) largest = l;
    if (r < this.size && this.heap[r] > this.heap[largest]) largest = r;

    if (largest !== i) {
      this.#swap(largest, i);
      this.heapifyDown(largest);
    }
  }

  /*
  n = # of elements in heap
  + RUNTIME Complexity: O(n·log(n))[WST]
  + SPACE Complexity: O(1) [WST] 
  NOTE: Performed IN-PLACE if we "empty" our heap by calling 'extractMax' for every element in heap... Will leave heap "un-heapified" (i.e. without "heap property") 
    → call 'buildMaxHeap' afterward to re-instate said property 
  */
 
  heapSort() {
    if (this.size < 1) return this.heap;
    const size = this.size;
    for (let i = 0; i < size; i++) {
      this.extractMax();
    }
    const sorted = this.heap;
    this.size = size;
    return sorted;
  }
}


// TESTING:
const maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(1);
maxHeap.insert(5);
console.log(maxHeap); // Expect: [5, 4, 1, 3]
console.log(maxHeap.heapSort()); Expect: [1, 3, 4, 5]

export default MaxHeap;