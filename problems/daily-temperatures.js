"use strict"; // «TAGS» Stack

/*
Given a list of daily temperatures 'T', return a list that, for each day in the input, tells you how many days you
would have to wait until you might experience a "warmer" temperature. If there is no future day for which this is possible,
add a '0' to the input at the given index instead.
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O(2n) → O(n) [WST]
+ SPACE Complexity: O(n) [WST]
⇲ note We can use a stack to keep track of the indexes of temperatures that we still haven't found counterparts for 
(i.e. temperatures that are higher/"warmer" than )
*/

const dailyTemperatures = temps => {
  let days = new Array(temps.length).fill(0);
  let stack = [];
  for (let i = 0; i < temps.length; i++) {
    if (stack.length === 0) stack.push(i);
    else {
      // if we have something in the stack, and the temp belonging to the top index in the stack is less than 
      // the temp at the current index...
      while (stack.length > 0 && temps[stack[stack.length - 1]] < temps[i]) {
        let stackTopIdx = stack[stack.length - 1];
        // add difference in days (indices) between temp at index on top of stack, and temp at current index
        // to our output ("days" array) at the index from the top of the stack
        days[stackTopIdx] = i - stackTopIdx;
        // remove index from stack for which we've now found a "warmer" temperature 
        stack.pop();
      }
      // add the current temp's index to the stack so we can find a "warmer" temperature for it
      stack.push(i);
    }
  }
  return days;
};

// TESTING:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expect: [1, 1, 4, 2, 1, 1, 0, 0]
