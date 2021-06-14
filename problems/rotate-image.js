"use strict";

function rotateImage(img) {
  const n = img.length;
  for (let lvl = 0; lvl < (n + 1) / 2; lvl++) {
    for (let x = 0; x < n / 2; x++) {          
      let temp = img[n - x - 1][lvl];
      // matrix[n - 1 - lvl][n - x - 1] = matrix[x][n - 1 - lvl];

    }
  }
  return img;
}

// TESTING:
let i1 = [
  [1,  2,  3,  4 ],
  [5,  6,  7,  8 ],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

let i2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

console.log(JSON.stringify(rotateImage(i1)));
console.log(JSON.stringify(rotateImage(i2)));
