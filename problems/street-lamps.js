"use strict"; // «TAGS» Array, Subarray, Graph, Lamp/Light, Position, Range, Brightest, Overlap, Prefix Sum, Difficulty: Medium, LeetCode: #2021, Companies: Amazon

/*
A perfectly straight street is represented by a number line. The street has street lamp(s) on it and is represented by a 2D-integer array: 'lights'. 
Each subarray within the given 'lights' array takes the following form: 'lights[i] = [position_i, range_i]', which indicates that there's a street lamp 
at position position/index 'i' (on the number line) that lights up the area from '[position_i - range_i, position_i + range_i]' (inclusive)...

The "brightness" of a given position on the numberline/street is defined as the sum of the number of lamp's that together light up said position. 
Given the provided 2D-array (i.e. 'lights') of street lamp positions & ranges, return the "brightest" position on the street. 
If there are multiple "brightest" positions, return the one with the "smallest" position/index on the street/numberline.

  EX's:
    lights = [[-3, 2], [1, 2], [3, 3]] → brightestPositionOnStreet(lights) = -1
      EXPLANATION -- The FIRST street lamp lights up the area between the following two points: [(-3) - 2, (-3) + 2] = [-5, -1],
        the SECOND street lamp lights up the area from between: [1 - 2, 1 + 2] = [-1, 3],
        and the THIRD street lamp lights up the area from between: [3 - 3, 3 + 3] = [0, 6].
        Furthermore, the "brightest" positions and their given "brightness levels" are represented by the following subarrays (i.e. ['position', 'brightness level'])...
          [-1, 2]; [0, 2]; [1, 2]; [2, 2] -- since every positions shares the same "brightness level", we return the position of the lamp with the "smallest" position/index (i.e. '-1')
                    
Position -1 has a brightness of 2, illuminated by the first and second street light.
Positions 0, 1, 2, and 3 have a brightness of 2, illuminated by the second and third street light.
Out of all these positions, -1 is the smallest, so return it.
*/

/*
n = # of elements/"street lamps" (i.e. subarrays) in the 2D input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
⇲ note
*/

const brightestPositionOnStreet = lights => {
  const generateLightBoundaries = (position, range) => [position - range, position + range];

  const n = lights.length;
  let lowerBounds = new Array(n), upperBounds = new Array(n);
  lights.forEach((lamp, i)=> {
    const [lower, upper] = generateLightBoundaries(...lamp);
    lowerBounds[i] = lower, upperBounds[i] = upper;
  });

  /* sort lower bounds and upper bounds of ranges of light */
  lowerBounds.sort((a, b) => a - b);
  upperBounds.sort((a, b) => a - b);

  let brightness = 0, maxBrightness = 0, brightestPosition = lowerBounds[0];
  for (let low = 0, high = n - 1; low < n; low++) {
    // [[-3, 2], [1, 2], [3, 3]] → lower = [-5, -1, 0] upper = [-1, 3, 6]

    if (brightness !== 0 && lowerBounds[low] < upperBounds[high]) {
      brightness--;
    } else {
      brightness++;
      high--;
    }

    if (brightness > maxBrightness) {
      maxBrightness = brightness;
      brightestPosition = low;
      if (maxBrightness > n - low + brightness) {
        return brightestPosition;
      }
    }
  }
  
  return brightestPosition;
};


// TESTING:
// console.log(brightestPositionOnStreet([[-3, 2], [1, 2], [3, 3]])); // Expect: -1 
// console.log(brightestPositionOnStreet([[1, 0],[0, 1]])); // Expect: 1
// console.log(brightestPositionOnStreet([[1, 2]])); // Expect: -1


console.log("heyoooo rivverrrr")