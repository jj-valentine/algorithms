"use strict"; // «TAGS» Array, 'K' (Variable), Largest, Compare, Sort, Priority Queue (i.e. 'MinHeap'), LC : #215 (Medium), IK : Sorting, Companies: Amazon, Facebook, Google

/*
Given an integer array and an integer 'k', return the 'k'th largest element in the array

NOTE: This is the 'k'th largest element in the sorted array, NOT the 'k'th DISTINCT element...

  EX's:
    arr = [3, 2, 1, 5, 6, 4], k = 2 →  kthLargestInArray(arr, k) = 5

    arr = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4 →  kthLargestInArray(arr, k) = 4
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n·log(n)) [WST]
+ SPACE Complexity: O(log(n)) [WST]
NOTE: "Naive" approach -- simply sort the array and return the element at index 'n - k'...
*/

const kthLargestInArrayV1 = (arr, k) => arr.sort((a, b) => a - b)[arr.length - k];


/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n·log(k)) [WST]
+ SPACE Complexity: O(k) [WST]
NOTE: Use a 'MinHeap' of size 'k' (to keep track of the 'k' largest elements)...
*/

const kthLargestInArrayV2 = (arr, k) => {
  const MinHeap = new Array(k);
  let size = 0;


  for (let i = 0; i < arr.length; i++) { 
    const el = arr[i];
    if (size < k) {
      MinHeap[size++] = arr[i];
      heapifyUp(MinHeap);
    } else {
      if (el > MinHeap[0]) {
        MinHeap[0] = el;
        heapifyDown(MinHeap);
      }
    }
  }

  return MinHeap[0];

  function heapifyUp(heap, i = size - 1) {
    const parentOf = idx => Math.floor((idx - 1) / 2);
    let curr = i, parent = parentOf(curr);

    while (curr > 0 && heap[curr] < heap[parent]) {
      swap(heap, curr, parent);
      curr = parent;
      parent = parentOf(curr);
    }
  }

  function heapifyDown(heap, i = 0) {
    let l = (2 * i) + 1, r = l + 1, min = i;

    if (l >= size) return;
    if (heap[l] < heap[min]) min = l;
    if (heap[r] < heap[min]) min = r;

    if (min != i) {
      swap(heap, min, i);
      heapifyDown(heap, min);
    }
  }

  function swap(a, i, j) {
    let e = a[i];
    a[i] = a[j];
    a[j] = e;
  }
};

/*
SOLUTION #3
n = # of elements in input array
+ RUNTIME Complexity: O(n²) [WST] / O(n) [BST/AVG]
+ SPACE Complexity: O(1) [WST]
NOTE: Employ 'QuickSelect' algorithm/approach (i.e. modified 'Quicksort' + "Hoare's" partitioning)...
*/

const kthLargestInArrayV3 = (a, k) => {
  let left = 0, right = a.length - 1;
  while (left <= right) {
    const fP = hPartition(a, left, right, rI(left, right));
    if (fP === a.length - k) return a[fP];
    else if (fP < a.length - k) left = fP + 1;
    else right = fP - 1;
  }

  return -1;
  
  function rI(lB, rB) {
    return Math.floor(Math.random() * (rB - lB + 1) + lB);
  } 
  
  function swap(a, i, j) {
    let e = a[i];
    a[i] = a[j];
    a[j] = e;
  }
  
  function hPartition(a, l, r, p) {
    swap(a, p, r); // place pivot "aside" (i.e. at end of array)
    for (var h = l, t = h; h < r; h++) if (a[h] < a[p]) swap(a, h, t++); 
    swap(a, r, t); // place pivot where it belongs (i.e. at index 't')
    return t;
  }
}

// function kth_largest_in_an_array(numbers, k) {
//   // Write your code here.
//   //bubble sort - sort till k and pick n-k value - time exceeded
//   //quicksort - regular quicksort code time exceeded
//   //heapsort - buildheap and stop. at kth highest element? - didn't try
//   //SAW Quick Sort improved solution and implemented based on that
//   return quickSort(numbers, 0 , numbers.length -1, k);
// }

// function quickSort(numbers, start, end, k) {
//   if (start >= end) return numbers[k - 1];
//   const pivotIndex = Math.floor((Math.random() * (end-start+1) + start));
//   const pivot = numbers[pivotIndex];
//   swap(numbers, start, pivotIndex);
//   let right = end;
//   let left = start + 1;
//   //sort descending and return k-1
//   while (left <= right) {
//       if (numbers[left] > pivot) {
//           left++;
//       } 
//       else if (numbers[right] < pivot) {
//           right--;
//       } else {
//           swap(numbers, right, left);
//           left++;
//           right--;
//       }
//   }
//   swap(numbers, right, start);
//   if (right === k-1) {
//       return numbers[k-1];
//   } else if (right > k - 1) {
//       quickSort(numbers, start, right - 1, k);
//   } else {
//       quickSort(numbers, right + 1, end, k);
//   }
//   return numbers[k - 1];
// }


// function swap(arr, i ,j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }


// TESTING:
console.log(kthLargestInArrayV2([3, 2, 1, 5, 6, 4], 2)); // Expect: 5
console.log(kthLargestInArrayV2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expect: 4
