"use strict";

/*
SOLUTION #1
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
    let popped = this.storage[--this.index];
    delete this.storage[--this.index];
    return popped;
  };

  /* returns element at the top of stack without changing stack */
  MinStack.prototype.top = () => this.storage[this.index - 1].value;

  /* returns smallest element in the stack */
  MinStack.prototype.getMin = () => this.storage[this.index - 1].min;
}


/*
SOLUTION #2
+ RUNTIME Complexity:
  * Access -- O(1) [WST]
  * Insertion -- O(1) [WST]
  * Deletion -- O(1) [WST]
+ SPACE Complexity: O(n) [WST] 
*/

let MinStackV2 = {
  stack: {},
  size: 0,
  min: null,

  create: function() {
    let minStack = Object.create(this);
    minStack.stack = this.stack;
    minStack.size = this.size;
    minStack.min = this.min;
    return minStack;
  },

  push: function(n) {
    let pushed = n;
    if (this.size === 0) {
      this.min = n;
    } if (n < this.min) {
      pushed = (2 * pushed) - this.min;
      this.min = n;
    }
    this.stack[this.size++] = pushed; 
  },

  pop: function() {
    if (this.size === 0) return "Stack is Empty!";
    let popped = this.stack[--this.size];
    if (popped < this.min) this.min = (2 * this.min) - popped;
    if (this.size === 0) this.min = null;
    delete this.stack[this.size];
    return popped;
  },

  getMin: function() {
    return this.size > 0 ? this.min : "Stack is Empty!";
  }
};


// TESTING:
const minStackV2 = MinStackV2.create();
minStackV2.push(3);
minStackV2.push(5);
minStackV2.push(2);
minStackV2.push(1);
minStackV2.push(-3);
minStackV2.push(-1);
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());
minStackV2.pop();
console.log(minStackV2.getMin());

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // Expect: -3
// minStack.pop();
// console.log(minStack.getMin()); // Expect: -2
