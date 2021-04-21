"use strict";

/*
+ RUNTIME Complexity:
  * Access -- O(n) [AVG/WST]
  * Search -- O(n) [AVG/WST]
  * Insertion -- O(1) [AVG/WST]
  * Deletion -- O(1) [AVG/WST]
+ SPACE Complexity: O(n) [WST] 
*/

function Stack() {
  this.storage = {};
  this.index = 0;

  /* adds element to the top of the stack */
  Stack.prototype.push = value => {
    this.storage[this.index++] = value;
  }

  // removes the last element added to the stack (element at top of stack)
  Stack.prototype.pop = () => {
    if (this.index === 0) return 'stack empty -- no elements to pop!';
    let popped = this.storage[--this.index];
    delete this.storage[this.index]
    return popped;
  }

  /* returns element at the top of stack without changing stack */  
  Stack.prototype.peek = () => this.storage[this.index - 1];

  /* returns size of stack -- # of elements in stack */
  Stack.prototype.size = () => this.index;

  /* checks to see if stack is empty */
  Stack.prototype.isEmpty = () => this.index === 0;
}

// TESTING:
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('stack size:', stack.size()); // Expect: 2
stack.push(3);
console.log('peeking:', stack.peek()); // Expect: 2
console.log('is stack empty?:', stack.isEmpty()); // Expect: false
console.log('1st pop:', stack.pop()); // Expect: 3
console.log('2nd pop:', stack.pop()); // Expect: 2
console.log('peeking:', stack.peek()); // Expect: 1
console.log('3rd pop:', stack.pop()); // Expect: 1
console.log('4th pop:', stack.pop()); // Expect: "stack empty -- no elements to pop!"
console.log('is stack empty?:', stack.isEmpty()); // Expect: true
