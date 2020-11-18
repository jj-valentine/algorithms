"use strict";

/* 
After becoming famous, the CodeBots decided to move into a new building together. 
Each of the rooms has a different cost, and some of them are free, but there's a rumour that all 
the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in 
any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
your task is to return the total sum of all rooms that are suitable for the CodeBots 
(ie: add up all the values that don't appear below a 0) 
*/

const matrixElementsSum = matrix => {
  for (var j = 0,  total = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      total += matrix[i, j];
    }
  }
  return total;
}


// naive approach
const matrixElementsSumV2 = matrix => {
  let total = 0;
  let free = {};
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 0 || free[j]) free[j] = true;
          else total += matrix[i][j];  
          console.log(total, free)
      }
  }
  return total;
}

let matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));