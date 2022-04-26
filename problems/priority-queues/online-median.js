"use strict"; // «TAGS» Array, Class, Stream, 'K' (Variable), Largest, Compare, Priority Queue (i.e. 'MinHeap'), LC : #295 (Hard), IK : Sorting, Companies: Amazon, Apple, Bloomberg, Facebook, Google, LinkedIn, Microsoft, Uber

//  Q:  What's the significance of the number(s) '10⁴' and/or '10⁵' (shows up in 'Kth Largest Stream' as well)?

/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
For example, the median of the list of integers '[2, 3, 4]' is '3', while the median of list '[2, 3] would be '(2 + 3) / 2 = 2.5'...

  Part #1:
    Given this information, implement a class with functionality that enables you to add new numbers to its list from a stream, 
    as well as find the median of said list (i.e. with prototypal methods 'add(n)' and 'findMedian()')

    NOTE: Median values returned from 'findMedian()' that lie within 10⁻⁵ of the actual answer will be accepted!
    
      EX: 
        medianFinder.add(1); medianFinder.add(2); medianFinder.findMedian() = 1.5; medianFinder.add(3); medianFinder.findMedian() = 2.0

    NOTE: Assume that at most, there will be '5·104 = 520' calls to 'add(newInt)' and that there will be at least one element in the data structure before calling 'findMedian()'

  Part #2 ("Follow Up"):
    → If all integers from the stream are in the range '[0, 100]', how would you optimize your solution?
    → If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
*/

/*
SOLUTION #1 (Part #1) -- "Class-Based"
n = # of elements in input stream (i.e. total # of elements added via 'add(newInt)' at any given time)
+ RUNTIME Complexity:
  · 'add(newInt)' → O(log(n)) [WST] -- for SINGLE integer 
  · 'findMedian()' → O(1) [WST]
+ SPACE Complexity: O(n) [WST]
*/

class OnlineMedian {
  constructor() {
    this.MinHeap = []; // to hold "larger" integers
    this.MaxHeap = []; // to hold "smaller" integers
    this.total = 0; // total # of elements/integers in stream (i.e. 'MinHeap.length' + 'MaxHeap.length')
  }

  #isMin(heap) {
    return heap === this.MinHeap;
  }

  #sameSize() {
    return this.MaxHeap.length === this.MinHeap.length;
  }

  #toggleHeap(heap) {
    return this.#isMin(heap) ? this.MaxHeap : this.MinHeap;
  }

  #insertIntoCorrectHeap(heap, n) {
    let root = heap[0], toAdd = n;
    
    if (this.#isMin(heap) ? toAdd >= root : toAdd < root) {
      heap[0] = n;
      this.#heapifyDown(heap);
      toAdd = root;
    }

    const otherHeap = this.#toggleHeap(heap);
    otherHeap[otherHeap.length] = toAdd;
    this.#heapifyUp(otherHeap);
  }

  add(newInt) {
    this.#insertIntoCorrectHeap(this.#sameSize() ? this.MaxHeap : this.MinHeap, newInt);
    this.total++;
  }

  findMedian() {
    if (this.total === 0) return null;
    let mean = this.MinHeap[0];
    if (this.#sameSize()) mean = ((mean + this.MaxHeap[0]) / 2);
    return mean.toFixed(1);
  }

  /* comparator callback function (works for both heaps) */
  #heapComp(heap, childIdx, parentIdx) {
    return this.#isMin(heap) ? heap[childIdx] < heap[parentIdx] : heap[childIdx] > heap[parentIdx]; 
  }

   /* generates index of the parent of a given child (based on child's index) */
   #parentOf(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  } 

  #heapifyUp(heap, i = heap.length - 1) {
    let currIdx = i, parentIdx = this.#parentOf(currIdx);
    while (currIdx > 0 && this.#heapComp(heap, currIdx, parentIdx)) {
      this.#swap(heap, currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = this.#parentOf(currIdx);
    }
  }

  #heapifyDown(heap, i = 0) {
    let leftIdx = (i * 2) + 1, rightIdx = leftIdx + 1, parentIdx = i;

    if (leftIdx >= heap.length) return;
    if (this.#heapComp(heap, leftIdx, parentIdx)) parentIdx = leftIdx;
    if (this.#heapComp(heap, rightIdx, parentIdx)) parentIdx = rightIdx;

    if (parentIdx != i) {
      this.#swap(heap, parentIdx, i);
      this.#heapifyDown(heap, parentIdx);
    }
  }

  #swap(heap, i, j) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

// TESTING:
let mF = new OnlineMedian();
// mF.add(3);
// console.log(mF.findMedian()); // Expect: 3.0
// mF.add(8);
// console.log(mF.findMedian()); // Expect: 5.5
// mF.add(5); 
// console.log(mF.findMedian()); // Expect: 5.0
// mF.add(2); 
// console.log(mF.findMedian()); // Expect: 4.0

// mF = new OnlineMedian();
// mF.add(-1);
// console.log(mF.findMedian()); // Expect: -1.0
// mF.add(-2);
// console.log(mF.findMedian()); // Expect: -1.5
// mF.add(-3); 
// console.log(mF.findMedian()); // Expect: -2.0
// mF.add(-4); 
// console.log(mF.findMedian()); // Expect: -2.5
// mF.add(-5); 
// console.log(mF.findMedian()); // Expect: -3.0

// mF = new OnlineMedian();
// mF.add(-1);
// mF.add(-6);
// console.log(mF.findMedian()); // Expect: -3.5
// mF.add(-7); 
// console.log(mF.findMedian()); // Expect: -6.0
// mF.add(-3); 
// console.log(mF.findMedian()); // Expect: -4.5
// mF.add(-2); 
// console.log(mF.findMedian()); // Expect: -3.0
// mF.add(-8); 
// console.log(mF.findMedian()); // Expect: -4.5
// mF.add(-4); 
// console.log(mF.findMedian()); // Expect: -4.0

mF = new OnlineMedian();
mF.add(78);
mF.add(14);
mF.add(50); 
mF.add(20); 
mF.add(13); 
mF.add(9); 
mF.add(25); 
mF.add(8); 
mF.add(13); 
mF.add(37); 
mF.add(29); 
console.log(mF.findMedian()); // Expect: 20.0
console.log(mF);
mF.add(33); 
console.log(mF.findMedian()); // Expect: 22.5


/* 
SOLUTION #1 (Part #2) -- "Follow-Up" Questions

Q1: If all integers from the stream are in the range '[0, 100]', how would you optimize your solution?

  Store frequency of each integer added in an array of size '100' and a pointer that references the median at any given time.
  We can then increment said pointer when an integer is added that's numerically "larger" than the  median at the given time it's added
  and decrements when said integer is instead numerically "smaller" than the median at the time that it's added. This way, the time and space complexity 
  considering both primary operations (i.e. 'add' and 'findMedian') will amount to:

  n = # of elements in input stream (i.e. total # of elements added via 'add(newInt)' at any given time)
  + RUNTIME Complexity:
    · 'add(newInt)' → O(1) [WST] -- for SINGLE integer 
    · 'findMedian()' → O(1) [WST]
  + SPACE Complexity: O(100) → O(1) [WST]

Q2: If 99% of all integer numbers from the stream are in the range '[0, 100]', how would you optimize your solution?

  If 99% of the integers fall within the range '[0, 100]', our median should also fall within that range. We have a few options in this case.
  Assuming we won't get so statistically unlucky that our first '≤ 5000' integers are all outside of the given range, we can initialize our original array
  with two extra "buckets" -- one to hold the frequency of added integers that are numerically less than '0', and the other for those integers larger than '100'.
  The same effect could be produced in keeping a count of all numbers larger than '100' (alongside a counter that keeps track of the total # of integers added).
  However, if we consider that the integers that fall outside the range will only compromise '1%' of the dataset, we can choose to initialize two separate additional
  data structures (i.e. arrays OR heaps, perhaps) and store the "smaller" and "larger" numbers in each DS respectively. This shouldn't severely impact our TIME/SPACE
  complexity since statistically, it's likely that there will be so few of these numbers that if we must find a median that threatens to fall outside of our given
  range, we could choose to sort both arrays (or keep them sorted as we go) and find it manually, OR simply move our "live" pointer between the three DS's. 
  That being said, it should be noted that a median will only fall outside of the given range IF at any given time, the difference between the total amount of 
  "larger" integers and "smaller" integers is greater than or equal to the total amount of added integers that fall inside the range '[0, 100]'. This is even more
  statistically unlikely, but depending on the "use-case" of our solution, may still be worth sacrificing the small amount of space to track and accomodate all those
  integers added that qualify as outliers to our given range...
 */
