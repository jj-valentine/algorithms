"use strict"; // «TAGS» Depth First Search (DFS), Recursion, Grid, Matrix, Image, Pixels, Color, 4-Directionally, Adjacent  LC : #733 (Easy), IK : Recursion, Companies: Amazon, Microsoft, Palantir

/*
An image is represented by an 'm' x 'n' integer grid where each integer represents the pixel value of the image. You are also given three other inputs (all integers)
including two indices ('rowStart' & 'colStart') which can together be used to represent the coordinates of the pixel that you'll start performing your "flood fill" on.
To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally (i.e. adjacent) to the starting pixel of the same color as the
starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels 
with the final integer input value: 'newColor'. Return the modified image after performing the "flood fill".

  EX's:
    image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], rowStart = 1, colStart = 1, newColor = 2 
      → floodFill(image, rowStart, colStart, newColor) = [[2, 2, 2], 
                                                          [2, 2, 0], 
                                                          [2, 0, 1]]
    image = [[0, 0, 0], [0, 0, 0]], rowStart = 0, colStart = 0, newColor = 2
      floodFill(image, rowStart, colStart, newColor) = [[2, 2, 2], 
                                                        [2, 2, 2]]
*/

/*
m = # of rows in input grid/matrix (i.e. array of arrays)
n = # of columns in input matrix (i.e. length of each/every row in input matrix)
+ RUNTIME Complexity: O(n·m) [WST]
+ SPACE Complexity: O(n·m) [WST]
NOTE: Implement simple 'DFS' approach (i.e. similar to 'Island Count' problem)...
*/

const floodFill = (image, startRow, startCol, newColor) => {
  const m = image.length, n = image[0].length;
  const prevColor = image[startRow][startCol];

  changeColorOfPixels(startRow, startCol);
  return image;

  function changeColorOfPixels(currRow, currCol) {
    if (
      currRow < 0 || currRow >= m || 
      currCol < 0 || currCol >= n ||
      image[currRow][currCol] !== prevColor ||
      image[currRow][currCol] === newColor // in-case we try starting "flood fill" on pixel that's already "painted" with new color
    ) return;

    image[currRow][currCol] = newColor;

    /* "recurse" in all four linear directions (i.e. up, down, left, right) */
    changeColorOfPixels(currRow + 1, currCol) // "travel" UP
    changeColorOfPixels(currRow - 1, currCol); // "travel" DOWN
    changeColorOfPixels(currRow, currCol + 1); // "travel" RIGHT
    changeColorOfPixels(currRow, currCol - 1); // "travel" LEFT
  }
};

// TESTING:
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)); // Expect: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 2)); // Expect: [[2, 2, 2], [2, 2, 2]]
console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1)); // Expect: [[ 0, 0, 0 ], [ 0, 1, 1 ]]
