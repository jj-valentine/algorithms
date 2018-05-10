'use strict';


/*
[AVG/WST] RUNTIME Complexity
  * Access: O(n)
  * Search: O(n)
  * Insertion: O(1)
  * Deletion: O(1)
[WST] SPACE Complexity: O(n)
*/

function Stack() {

  this.storage = {};
  this.index = 0;

  // adds element to the top of the stack
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

  // returns element at the top of stack without changing stack
  Stack.prototype.peek = () => this.storage[this.index - 1];

  // returns size of stack -- # of elements in stack
  Stack.prototype.size = () => this.index;

  // checks to see if stack is empty
  Stack.prototype.isEmpty = () => this.index === 0;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('stack size:', stack.size()); // -> 2
stack.push(3);
console.log('peeking:', stack.peek()); // -> 3
console.log('is stack empty?:', stack.isEmpty()); // false
console.log('1st pop:', stack.pop()); // -> 3
console.log('2nd pop:', stack.pop()); // -> 2
console.log('peeking:', stack.peek()); // -> 1
console.log('3rd pop:', stack.pop()); // -> 1
console.log('4th pop:', stack.pop()); // -> "stack empty -- no elements to pop!"
console.log('is stack empty?:', stack.isEmpty()); // -> true
