"use strict"; // «TAGS» Array, Class, Stream, 'K' (Variable), Largest, Compare, Priority Queue (i.e. 'MinHeap'),   LC  #703 (Easy),  IK  Sorting, Companies: Amazon, Facebook, Google

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
+ RUNTIME Complexity: O(n·log(k)) [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/


/*
idea:  
  create MinHeap of size 'k'
  add initial array (maintaining "heap" property)

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
    return this.#heap[0] || null;
  }

  get heap() {
    return this.#heap;
  }

  get size() {
    return this.#size;
  }

  add(n) {
    if (this.#size < this.k) {
      this.#heap[this.#size++ - 1] = n;
      this.#heapifyUp(this.#heap);
    } else if (n > this.kthLargest) {
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
        this.#heapifyDown(minHeap, 0);

      }
      this.#size++;
      this.#heapifyUp(minHeap, i);
    }

    return minHeap;
  };

  #heapifyUp(minHeap, i = this.#size - 1) {
    const parent = idx => Math.floor((idx - 1)/ 2);
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
const kthLargestV1 = new KthLargestInStream(3, [4, 5, 8, 2]);
console.log(kthLargestV1.heap);
console.log(kthLargestV1.add(3)); // Expect: 4
console.log(kthLargestV1.heap);
console.log(kthLargestV1.add(5)); // Expect: 5
console.log(kthLargestV1.add(10)); // Expect: 5
console.log(kthLargestV1.add(9)); // Expect: 8
console.log(kthLargestV1.add(4)); // Expect: 8
console.log(kthLargestV1.heap);

// const kthLargestV2 = new KthLargestInStream(5, [4, 5, 8, 2]);

