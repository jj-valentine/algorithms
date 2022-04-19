"use strict"; // «TAGS» Array, Subarray, Graph, Adjaceny List/Matrix, Undirected, Weighted, Minimum, Cost, Distance, Greedy, LC : #1584 (Medium), Companies: Amazon

/*
You are given an array representing integer coordinates of some points on a 2D-plane, where 'points[i] = [x_i, y_i]'.
The cost of connecting two points with coordinates '[x_i, y_i]' and '[x_j, y_j]' is the "Manhattan Distance" between them: '|x_i - x_j| + |y_i - y_j|' 
(sum of the ABSOLUTE VALUE of the two aforementioned differences)

  EX's:
    points = [[0, 0], [2, 2], [ 3, 10], [5, 2], [7, 0]] → minimumCostToConnectPoints(points) = 20
    
    points = [[3, 12], [-2, 5],[-4, 1]] → minimumCostToConnectAllPoints(points) = 18
    
    points = [[0,0],[1,1],[1,0],[-1,1]] → minimumCostToConnectAllPoints(points) = 4
*/

/*
n = # of subarrays in input array (i.e. each pair/subarray of'x' & 'y' coordinates represents a single point) 
+ RUNTIME Complexity: O(n²) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const minimumCostToConnectPoints = points => {
  /* "HELPER": calculate 'Manhattan Distance' (sum of absolute differences of each point's 'x' & 'y' coordinates) */
  const calcManhattanDistance = (p1, p2) => Math.abs(p2[0] - p1[0]) + Math.abs(p2[1] - p1[1]);

  /* keep track of minimum distances (i.e. from each point to it's nearest point) */
  const n = points.length, minDistances = Array(n).fill(Infinity);
  minDistances[0] = 0;

  let next = 0, minCost = 0;
  for (let step = 1; step < n; step++) {
    let currPoint = -1, currMin = Infinity;
    for (let i = 1; i < n; i++) {
      if (minDistances[i] > 0) {
        minDistances[i] = Math.min(minDistances[i], calcManhattanDistance(points[i], points[next]));
        if (minDistances[i] < currMin) {
          currMin = minDistances[i];
          currPoint = i;
        }
      } 
    }
    
    /* update cost with most recent minimum path 
      → initialize point that formed minimum simple path with previous point (i.e. so we can iterate through said point's edges next, etc.) */
    minCost += currMin;
    minDistances[currPoint] = 0;
    next = currPoint;
  }
  
  return minCost;
};

// TESTING:
console.log(minimumCostToConnectPoints([[0, 0], [2, 2], [ 3, 10], [5, 2], [7, 0]])); // Expect: 20
console.log(minimumCostToConnectPoints([[3, 12], [-2, 5], [-4, 1]])); // Expect: 18
console.log(minimumCostToConnectPoints([[0, 0], [1, 1], [1, 0], [-1, 1]])); // Expect: 4
console.log(minimumCostToConnectPoints([[-1000000, -1000000], [1000000, 1000000]])); // Expect: 4000000
console.log(minimumCostToConnectPoints([[0, 0]])); // Expect: 0