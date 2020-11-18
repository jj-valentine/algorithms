"use strict";

const boxBlur = img => {
  let firstTotal = 0;
  for (let i = 0; i < img.length - 2; i++) {
    //
    for (let j = 0; j < img[0].length - 3; j++) {
      firstTotal -= (img[i][j] + img[i + 1][j] + img[i + 2][j]);
      firstTotal += (img[i][j + 3] + img[i + 1][j + 3] + img[i + 2][j + 3]);
    }
  }
}


img[0][0]
img[1][0]
img[2][0]

img[0][1]
img[1][1]
img[2][1]