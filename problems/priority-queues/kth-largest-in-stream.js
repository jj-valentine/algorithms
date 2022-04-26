"use strict"; // «TAGS» Array, Class, Stream, 'K' (Variable), Largest, Compare, Priority Queue (i.e. 'MinHeap'), LC : #703 (Easy), IK : Sorting, Companies: Amazon, Facebook, Google

/*
Design a class to find the 'k'th largest element in a stream. It should initialize the object with the integer 'k' and the stream of integers as inputs/arguments.
Your class should include a method 'add' appends the integer value to the stream and returns the element representing the 'k'th largest element in the stream.
 
NOTE: We're searching for and returning the 'k'th largest element in the sorted order, NOT the 'k'th distinct element 
(i.e. there can be duplicates, and where there are they're treated as individual/independent elements)

  EX:
    k = 3, arr = [4, 5, 8, 2] → kthLargest.add(3) = 4; kthLargest.add(5) = 5; kthLargest.add(10) = 5; kthLargest.add(9) = 8; kthLargest.add(4) = 8
 
  CONSTRAINTS:
    1 ≤ k ≤ 104
    0 ≤ arr.length ≤ 104
    -104 ≤ arr[i] ≤ 104
    -104 ≤ val ≤ 104
  
NOTE: At most 104 calls will be made to 'add', and it's guaranteed there will be at least 'k' elements in the array when you search for the 'k'th element
*/

/*
n = # of elements in input array (i.e. initial stream)
m = total # of elements "appended" to heap (i.e. # of times 'add' method is called after class is initialized)
+ RUNTIME Complexity: O(n·log(k) + m·log(k)) → O((n + m)·log(k)) [WST]
+ SPACE Complexity: O(k) [WST]
*/

class KthLargestInStream {
  #size;
  #heap;

  constructor(k, arr) {
    this.k = k;
    this.#size = 0;
    this.#heap = this.#buildMinHeap(arr);
  }

  get kthLargest() {
    return this.#heap[0];
  }

  get heap() {
    return this.#heap;
  }

  get size() {
    return this.#size;
  }

  add(n) {
    if (this.#size < this.k) {
      this.#heap[this.#size] = n;
      this.#size++;
      this.#heapifyUp(this.#heap);
    } else if (n > this.kthLargest) {
      console.log(n);
      this.#heap[0] = n;
      this.#heapifyDown(this.#heap, 0);
    }

    return this.kthLargest;
  }

  #buildMinHeap(arr) {
    let minHeap = new Array(this.k);
    for (let i = 0; i < arr.length; i++) {
      if (i <= this.k - 1) minHeap[i] = arr[i];
      else if (arr[i] > minHeap[0]) {
        minHeap[0] = arr[i];
        this.#heapifyDown(minHeap);
      }

      this.#size++;
      if (this.#size > 1) this.#heapifyUp(minHeap, i);
    }

    return minHeap;
  };

  #heapifyUp(minHeap, i = this.#size - 1) {
    const parent = idx => Math.floor((idx - 1) / 2);
    let curr = i;
    while (curr >= 1 && minHeap[parent(curr)] > minHeap[curr]) {
      this.#swap(minHeap, curr, parent(curr));
      curr = parent(curr);
    }
  }

  #heapifyDown(heap, i = 0) {
    let l = (2 * i) + 1, r = l + 1, min = i;

    if (l < this.#size && heap[l] < heap[min]) min = l;
    if (r < this.#size && heap[r] < heap[min]) min = r;

    if (min !== i) {
      this.#swap(heap, min, i);
      this.#heapifyDown(heap, min);
    }
  }

  #swap(a, i, j) {
    let temp = a[i]
    a[i] = a[j];
    a[j] = temp;
  }
}

// TESTING:
let kthLargest = new KthLargestInStream(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // Expect: 4
console.log(kthLargest.add(5)); // Expect: 5
console.log(kthLargest.add(10)); // Expect: 5
console.log(kthLargest.add(9)); // Expect: 8
console.log(kthLargest.add(4)); // Expect: 8

kthLargest = new KthLargestInStream(1, []);
console.log(kthLargest.add(-3)); // Expect: -3
console.log(kthLargest.heap);
console.log(kthLargest.add(-2)); // Expect: -2
console.log(kthLargest.add(-4)); // Expect: -2
console.log(kthLargest.add(0)); // Expect: 0
console.log(kthLargest.add(4)); // Expect: 4

kthLargest = new KthLargestInStream(2, [0]);
console.log(kthLargest.add(-1)); // Expect: -1
console.log(kthLargest.heap);
console.log(kthLargest.add(1)); // Expect: 0
console.log(kthLargest.add(-2)); // Expect: 0
console.log(kthLargest.add(-4)); // Expect: 0
console.log(kthLargest.add(3)); // Expect: 1
