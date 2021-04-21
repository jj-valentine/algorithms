"use strict";

/*
+ RUNTIME Complexity:
  * Access -- O(1) [WST]
  * Insertion -- O(1) [WST]
  * Deletion -- O(1) [WST]
+ SPACE Complexity: O(n) [WST] 
*/

function MinStack() {
  this.storage = {};
  this.index = 0;

  function Node(value, min) {
    this.value = value;
    this.min = min;
  }

  /* adds element to the top of the stack */
  MinStack.prototype.push = value => {
    let min;
    if (this.index === 0 || value < this.storage[this.index - 1].min) min = value;
    else min = this.storage[this.index - 1].min;
    this.storage[this.index++] = new Node(value, min);
  };

  /* removes the last element added to the stack (element at top of stack) */
  MinStack.prototype.pop = () => {
    delete this.storage[--this.index];
  };

  /* returns element at the top of stack without changing stack */
  MinStack.prototype.top = () => this.storage[this.index - 1].value;

  /* returns smallest element in the stack */
  MinStack.prototype.getMin = () => this.storage[this.index - 1].min;
}

// TESTING:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expect: -3
minStack.pop();
console.log(minStack.getMin()); // Expect: -2
