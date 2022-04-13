"use strict"; // «TAGS» Array of Arrays, Grid, Matrix, Rows, Columns, Zeroes, In-Place, Flag, Reference, Constant Space, LeetCode: #73, Difficulty: Medium, Companies: Amazon, Facebook, Microsoft

/*
Given an 'm' x 'n' integer matrix/grid, if a given integer's value is zero, set every integer in its row and column to be zeroes, 
and then return the matrix/grid. You must perform all matrix/grid operations "in-place"

  EX's:
    grid = [[1, 1 ,1 ], [1, 0, 1], [1, 1, 1]] → setMatrixZeroes(grid) = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
    
    grid = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]] → setMatrixZeroes(grid) = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
*/

/*
n = # of elements/integers in input grid row
n = # of elements/integers in input grid column
+ RUNTIME Complexity: O(n * m) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note We can use the cells belonging to both the first row and columns as "flags" that tell use if all the integers in that given row or column need to be set to zero.
Furthermore, as we iterate through the grid/matrix for the first time, we can set simultaneously keep track of two references to tell us if in the end, the first row and 
the first column must be filled with zeroes. In particular, we can change the integer in the very first cell (i.e. 'grid[0][0]') to zero if the integers in the first row 
need to be set to zero, and similarly, we can use a separate boolean variable to tell us if all of the integers in the first column need to be set to zeroes. 
Furthermore, we iterate while diligently setting these "flags"/references, while also marking the first element in both the row and column belonging to an integer 
if its value is zero.Next, we can then iterate through the grid/matrix again (this time starting from 'grid[1][1]'), and mark each element zero if either the integer 
in the first row that belongs to its column is zero, or if the integer in the first column belonging to the element's row is zero. Lastly, we can check our two 
"first column and row" references to see if the integers in the first row and/or the first column need to be set to zero, and change those elements accordingly.
*/

const setMatrixZeroes = grid => {
  let numRows = grid.length, numCols = grid[0].length;
  let firstColZeroes = false;
  for (let r = 0; r < numRows; r++) {
    if (grid[r][0] === 0) firstColZeroes = true;
    for (let c = 1; c < numCols; c++) {
      if (grid[r][c] === 0) {
        grid[0][c] = 0;
        grid[r][0] = 0;
      }
    }
  }

  for (let r = 1; r < numRows; r++) {
    for (let c = 1; c < numCols; c++) {
      if (grid[0][c] === 0 || grid[r][0] === 0) grid[r][c] = 0;
    }
  }

  if (grid[0][0] === 0) for (let c = 0; c < numCols; c++) grid[0][c] = 0;

  if (firstColZeroes) for (let r = 0; r < numRows; r++) grid[r][0] = 0;
 
  return grid;
};

// TESTING:
console.table(setMatrixZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // Expect: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
console.table(setMatrixZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])); // Expect: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
