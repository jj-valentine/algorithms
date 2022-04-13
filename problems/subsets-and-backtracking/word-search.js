"use strict"; // «TAGS» Depth First Search (DFS), Backtracking, Recursion, Grid, Row, Column, Word, Character, LeetCode: #79, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Google, Microsoft, Snap, Twitter, Uber

/*
Given an 'm'x'n' grid of characters and a string 'word', return 'true' if 'word' exists in the grid. 
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
*/

/*
k = # of characters/letters in the input grid (i.e. n * m)
l = # of characters in input 'word'/string
+ RUNTIME Complexity: O(k * 4 * 3^min(k, l)) [WST]
+ SPACE Complexity: O(l) [WST]
 NOTE:  In order to calculate our time complexity, we can first focus on the DFS backtracking path that we will take. After the first character/cell,
we will only have '3' available directions to travel since we avoid going backward. So aside from the very first cell (our "root"),
which has '4' options available (i.e. 4^1), 
*/

//  Q:  Could you use search pruning to make your solution faster with a larger board?
const wordSearch = (grid, word) => {  
  let numRows = grid.length, numCols = grid[0].length;
  if (numRows * numCols < word.length) return false;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === word.charAt(0)) {
        if (backtrackWithDFS(row, col, 0)) return true;
      }
    }
  }
  return false;

  function backtrackWithDFS(currRow, currCol, idx) {
    if (idx >= word.length) return true;
    else if (
      currRow < 0 || currCol < 0 || 
      currRow >= numRows || currCol >= numCols || 
      grid[currRow][currCol] !== word.charAt(idx)
    ) return false;

    let found = false, offset = [0, 1, 0, -1];
    grid[currRow][currCol] = "@";
    // save time by pruning (i.e. cutting off our backtracking when we find a match)
    for (let i = 0; i < 4; i++) {
      found = backtrackWithDFS(currRow + offset[3 - i], currCol + offset[i], idx + 1);
      if (found) break;
    }

    // clean up with backtracking
    grid[currRow][currCol] = word.charAt(idx);
    return found;
  } 
};

// TESTING:
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
console.log(wordSearchYa(board, "ABCCED")); // Expect: true
console.log(wordSearchYa(board, "SEE")); // Expect: true
console.log(wordSearchYa(board, "ABCB")); // Expect: false
