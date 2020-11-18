"use strict";

function missingNumber(arr) {
  let total = ((arr.length + 1) / 2) * (2 + arr.length);
  return arr.reduce((sum, n) => {
    return sum - n;
  }, total);
}

// console.log(missingNumber([3, 7, 1, 2, 8, 4, 5]));

function findSumOfTwo(arr, value) {
  let lib = {};
  for (let i = 0; i < arr.length; i++) {
    if (lib[value - arr[i]]) return true
    lib[arr[i]] = true;
  }
  return false;
}

// console.log(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 10));
// console.log(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 19));

// function mergeSorted(head1, head2) {
//   let sorted = head1;
//   while (head2.next !== null) {
//     if (head2.next >
//   }
// }


