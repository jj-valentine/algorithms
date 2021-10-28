"use strict"; // TAGS:

/*
Determine if a '9'x'9' Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  1) Each row must contain the digitsL: 1-9 (without repetition)
  2) Each column must contain the digits: 1-9 (without repetition)
  3) Each of the nine '3'x'3' sub-boxes of the grid must contain the digits: 1-9 (without repetition)

  NOTE: A Sudoku board (partially filled) could be valid but is not necessarily solvable. 
    Only the filled cells need to be validated according to the mentioned rules.
 
  EX's:
    board = 
      [["5","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]    →    validSudoku(board) = true
      ,["4",".",".","8",".","3",".",".","1"] 
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]]


    board = 
      [["8","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]    →    validSudoku(board) = false
      ,["4",".",".","8",".","3",".",".","1"]
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]]
      
      Explanation -- Same board as in Example #1, except the '5' in the top left corner has been modified to '8'. 
        Since there are two '8's in the top left '3'x'3' sub-box, it is invalid
    */

/*
n = # of rows/columns in input grid (9)
+ RUNTIME Complexity: O(n^2) → O(1) [WST]
+ SPACE Complexity: O(n^2) → O(1) [WST]
NOTE: Could also use arrays with fixed lengths (instead of hashmaps). Yet another approach involves "bitmasking"
TODO: Look into BITMASKING
*/

const validSudoku = board => {
  let n = board.length; // 9, obviously
  let rows = [], cols = [], boxes = [];
  for (let i = 0; i < n; i++) {
    rows.push({});
    cols.push({});
    boxes.push({});
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let el = board[r][c];
      
      if (el === ".") continue; 

      if (rows[r][el] !== undefined) return false; 
      rows[r][el] = true;

      if (cols[c][el] !== undefined) return false;
      cols[c][el] = true;

      let boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[boxIdx][el] !== undefined) return false;
      boxes[boxIdx][el] = true;
    }
  }

  return true;
};

// TESTING:
let board = 
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]   
  ,["4",".",".","8",".","3",".",".","1"] 
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(board)); // Expect: true

board = 
  [["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"] 
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];
console.log(validSudoku(board)); // Expect: false