"use strict"; // TAGS:

/*
INSERT PROBLEM DESCRIPTION
*/

/*
n = # of subarrays in input array (# of given "points")
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/
/*  
for every point (excluding that point)
  find distance between it and all other points
  
  compare those distances as you go and when you find the min → save it to result

  repeat
*/
const minimumCostToConnectAllPoints = points => {
  const n = points.length; distances = Array(n - 1).fill(Infinity);
  let minCost = 0;
  const findManDistance = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  
  for (let i = 1; i < n; i++) {
    const selected = points[i];
    let min = Infinity;
    for (let p = 0; p < n; p++) {
      if (i === p) continue;
      min = Math.min(min, findManDistance(selected, points[p]));
    }
    minCost += min;

  }
};

// TESTING:
// console.log(minimumCostToConnectAllPoints());