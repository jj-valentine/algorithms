"use strict";

// NOTE: works for outside of image, but need to fix inside

function rotateImage(img) {
  const n = img.length;
  for (let lvl = 0; lvl < Math.floor(n / 2); lvl++) {
    for (let x = 0; x < n - (lvl * 2 + 1); x++) {          
      let temp1 = img[x + lvl][n - 1 - lvl];
      img[x + lvl][n - 1 - lvl] = img[lvl][x + lvl];
      let temp2 = img[n - 1 - lvl][n - 1 - x - lvl];
      let temp3 = img[n - 1 - x - lvl][lvl];
      img[n - 1 - lvl][n - 1 - x - lvl] =  temp1;
      img[n - 1 - x - lvl][lvl] = temp2;
      img[lvl][x + lvl] = temp3;
    }
  }
  return img;
}

// TESTING:
// let i1 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];

// let i2 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ];

// console.log(JSON.stringify(rotateImage(i1)));
// console.log(JSON.stringify(rotateImage(i2)));


function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

function mergeSortedLists(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  let mergedHead = null;
  if (l1.value < l2.value) {
    mergedHead = l1;
    l1 = l1.next;
  } else {
    headHead = l2;
    l2 = l2.next
  }
  let mergedTail = mergedHead;
  while (l1 || l2) {
    if (!l1) {
      mergedTail.next = l2;
      return mergedHead;
    } else if (!l2) {
      mergedTail.next = l1;
      return mergedHead;
    }
    let temp = null;
    if (l1.value <= l2.value) {
      temp = l1;
      l1 = l1.next;
    } else {
      temp = l2;
      l2 = l2.next;
    }
    mergedTail.next = temp;
    mergedTail = temp;
  }
  return mergedHead;
}


let l1 = new Node(4, new Node(8, new Node(15, new Node(19))));
let l2 = new Node(7, new Node(9, new Node(10, new Node(16))));
console.log(JSON.stringify(mergeSortedLists(l1, l2)));
