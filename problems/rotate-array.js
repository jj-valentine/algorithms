"use strict";


// brute force
const rotateArray = (arr, k) => {
  if (k === 0) return arr;
  for (let i = 0; i < k; i++) {
    let toMove = arr[arr.length - 1];
    for (let j = arr.length - 2; j >= 0; j--) {
      arr[j + 1] = arr[j]; 
    }
    arr[0] = toMove; 
  }
  return arr;
}

// O(n) solution

const rotateArrayV2 = (arr, k) => {
  k = k % arr.length;
  let count = 0;
  for (let start = 0; count < arr.length; start++) {
    let curr = start;
    let prev = arr[curr];
    do {

    } while (start !== start)
  }

}
// reverse array 3x solution

const rotateArrayV3 = (arr, k) => {
  reverseArray(0, arr.length - 1);
  reverseArray(0, k - 1);
  reverseArray(k, arr.length - 1);

  function reverseArray(start, end) {
    while (start < end) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++, end--;
    }
  }
  return arr;
}

// console.log(JSON.stringify(rotateArrayV3([1, 2, 3, 4, 5] ,3 )));

console.log(JSON.stringify(singleNumber([1, 1, 2, 3, 4, 4, 2])));