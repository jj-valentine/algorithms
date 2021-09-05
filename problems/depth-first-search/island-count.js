"use strict"; // TAGS: Depth First Search (DFS), Grid, Island, Land, Water, LeetCode: #200, Difficulty: Medium, Companies: Amazon, Snap

/*
Given an 'm'x'n' 2-D binary grid ('grid') which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

  EX's 
    grid = [                
      ["1","1","1","1","0"],   → islandCount(grid) = 1
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ] 

    grid = [
      ["1","1","0","0","0"],   → islandCount(grid) = 3
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
*/

/*
SOLUTION #1
n = # of columns/elements in a grid row
m = # of rows in grid
+ RUNTIME Complexity: O(n * m) [WST]
+ SPACE Complexity: O(n * m) [WST] -- every element is a piece of land, so our call stack would hold a call for every element on the grid
NOTE: Iterate over every point/element in every row ('longitude') and column ('latitude') on our map/grid. If we reach an element 
that represents a piece of land (i.e. '1'), initialize a DFS on that piece of land, submerging (turning into a "water element", i.e. '0') 
every other piece of land "connected" (i.e. vertically or horizontally adjacent to it) to it, submerging the pieces "connected" to
those adjacent pieces as well. 

NOTE: It would be pretty cool if we could save some time by memorizing every piece/element that we submerge so we could save ourselves 
from having to iterate over or "check" those pieces again to see if they're "land" or "water". This would obviously come at the expense of 
our space complexity, but depending on what we're trying to optimize here, that could be beneficial!
*/

const islandCountDFS = grid => {
  let islands = 0;
  let numOfRows = grid.length, numOfCols = grid[0].length;
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCols; col++) {
      if (grid[row][col] === "1") {
        islands++;
        submergeLandDFS(row, col);
      }
    }
  } 

  function submergeLandDFS(currRow, currCol) {
    if (
      currRow < 0 || currCol < 0 || 
      currRow >= numOfRows || currCol >= numOfCols ||
      grid[currRow][currCol] === "0"
      ) return;
    else grid[currRow][currCol] = "0";

    submergeLandDFS(currRow - 1, currCol);
    submergeLandDFS(currRow + 1, currCol);
    submergeLandDFS(currRow, currCol - 1);
    submergeLandDFS(currRow, currCol + 1);
  }
  return islands;
};


/*
SOLUTION #2
n = # of columns/elements in a grid row
m = # of rows in grid
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST] 
NOTE: 
*/

const islandCountBFS = grid => {

}

// TESTING:
let grid = [                
  ["1","1","1","1","0"],  
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
] 
console.log(islandCountDFS(grid)); // Expect: 1

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(islandCount(grid)); // Expect: 3