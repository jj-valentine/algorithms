"use strict"; // TAGS: Two Pointer, Max, Elevation Map, Trap, Rain Water, LeetCode: #42, Difficulty: Hard, Companies: Amazon, Apple, Facebook, Google, Microsoft, Snap

/*
Given 'n' non-negative integers representing an elevation map where the width of each bar is '1', compute how much water it can trap after it rains

  EX's
    heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] → trapRainWater(heights) = 6
    
    heights = [4, 2, 0, 3, 2, 5] → trapRainWater(heights) = 9    
*/

/*
SOLUTION #1
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Most "intuitive" approach
*/

const trapRainWater = heights => {
  let leftMax = 0, rightMax = 0;
  let max = Math.max(...heights), maxIdx = heights.indexOf(max);
  let rainWater = 0;
  for (let i = 0; i < maxIdx; i++) {
    let currHeight = heights[i];
    if (currHeight > leftMax) leftMax = currHeight;
    else rainWater += leftMax - currHeight;
  }

  for (let i = heights.length - 1; i > maxIdx; i--) {
    let currHeight = heights[i];
    if (currHeight > rightMax) rightMax = currHeight;
    else rainWater += rightMax - currHeight;
  }

  return rainWater;
};

/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Less expensive (no 'indexOf' OR Math.max(...heights)), but slightly less "intuitive" approach
*/

const trapRainWaterV2 = heights => {
  let left = 0, right = heights.length - 1;
  let leftMax = 0, rightMax = 0;
  let rainWater = 0;
  while (left < right) {
    let heightLeft = heights[left], heightRight = heights[right];
    if (heightLeft < heightRight) {
      heightLeft >= leftMax ? (leftMax = heightLeft) : (rainWater += leftMax - heightLeft);
      left++;
    } else {
      heightRight >= rightMax ? (rightMax = heightRight) : (rainWater += rightMax - heightRight);
      right--;
    }
  }
  return rainWater;
}

// TESTING:
console.log(trapRainWaterV2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expect: 6
console.log(trapRainWaterV2([4, 2, 0, 3, 2, 5])); // Expect: 9