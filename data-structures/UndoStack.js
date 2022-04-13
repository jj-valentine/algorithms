"use strict"; // «TAGS» 

/*
Implement an 'UndoStack' data structure... 
☞ TODO: EXPLAIN WHAT THAT IS HERE
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
*/

function UndoStack(cap) {
  let capacity = cap;
  let nextIdx = 0;
  let length = 0;
  let stack = new Array(capacity);

  return {
    push: function(val) {
      if (length !== capacity) {
        stack[nextIdx++] = val;
        nextIdx = nextIdx % capacity;
        length++;
      } else {
        
      }

      return stack;
    }
  };
};

// TESTING:
// console.log(UndoStack());
