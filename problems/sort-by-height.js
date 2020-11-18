"use strict";

/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 

If a[i] = -1, then the ith position is occupied by a tree. 
Otherwise a[i] is the height of a person standing in the ith position.

  EX:

    For a = [-1, 150, 190, 170, -1, -1, 160, 180], 
    sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]
*/

/*
n = # of elements in input array (including "trees" (i.e. -1))
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: First, filter all the heights of the people (discluding trees) into a new array and sort it. 
Then, loop through the input array and replace every element in a "height slot" (those without trees) with 
the first element of the sorted array (simultaneously shifting said element off the sorted array). 
*/

const sortByHeight = heightsArr => {
  let sorted = heightsArr.filter(height => height !== -1).sort((a, b) => a - b);
  return heightsArr.map(height => height !== -1 ? sorted.shift() : -1);
}


console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));