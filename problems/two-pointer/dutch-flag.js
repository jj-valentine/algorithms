"use strict"; // «TAGS» Array, Sorting, Two Pointer, In-Place, One Pass, Constant Space, Linear Time, Segregate/Group, Colors, LC: #75 (Medium), IK: Sorting, Companies: Amazon, Apple, Facebook, Microsoft, Salesforce

/*
Given a number of balls arranged in a line (each one being one of three possible colors), 
rearrange them (IN-PLACE) so that they're grouped together by color in the following order: "R" → "G" → "B"

  EX:
    balls = ["G", "B", "G", "G", "R", "B", "R", "G"] → dutchFlag(balls) = ["R", "R", "G", "G", "G", "G", "B", "B"]

⇲ note Implement an approach that only does ONE pass over the array, and doesn't use any extra space. A solution that simply "counts" colors 
and overwrites the input array containing the colors of the balls is not allowed...
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
⇲ note Use "Two Pointers" approach...
*/

const dutchFlag = arr => {
  let i = 0, r = 0, b = arr.length - 1;
  while (i <= b) {
    if (arr[i] === "R") [arr[r++], arr[i++]] = [arr[i], arr[r]];
    else if (arr[i] === "B") [arr[b--], arr[i]] = [arr[i], arr[b]];
    else if (arr[i] === "G") i++;
  }

  return arr;
};

// TESTING:
console.log(dutchFlag(["R", "R"])); // Expect: ["R", "R"]
console.log(dutchFlag(["B", "B", "G", "G", "R", "B", "R", "G"])); // Expect: ["R", "R", "G", "G", "G", "G", "B", "B"]
console.log(dutchFlag(["B", "R", "B", "G", "G", "R"])); // Expect: ["R", "R", "G", "G", "B", "B"]


