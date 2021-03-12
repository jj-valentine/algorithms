"use strict;"

/*
SOLUTION #1
n = # of elements in input
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...arr, ...left, ...right];
}

const mergeSort = arr => {
    const half = arr.length / 2;
    if (arr.length < 2) return arr;
    const left = arr.splice(0, half);
    merge(mergeSort(left), mergeSort(arr));
};


let arr = [14, 7, 3, 12, 9, 11, 6, 2];
console.log(mergeSort(arr));
