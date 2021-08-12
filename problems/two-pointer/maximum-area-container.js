"use strict"; // TAGS: Two Pointers

/*
You are given 'n' non-negative integers a_1, a_2, ..., a_n , where each represents a point at coordinate (i, a_i).
'n' vertical lines are drawn such that the two endpoints of the line 'i' are at (i, a_i) and (i, 0). 
Find two lines, which, together with the x-axis form a container, such that the container contains the most water.
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const maximumAreaContainer = arr => {
  let left = 0, right = arr.length - 1, maxArea = 0;
  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    maxArea = Math.max(height * (right - left), maxArea);
    if (arr[left] < arr[right]) left++;
    else right--;
  }
  return maxArea;
};

// TESTING:
console.log(maximumAreaContainer([1,8,6,2,5,4,8,3,7]));