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

