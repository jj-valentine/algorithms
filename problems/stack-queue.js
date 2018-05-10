'use strict';


/* Create a stack. Then create a queue using two stacks. */


function Stack() {

  this.storage = {};
  this.size = 0;

  // adds element to the top of the stack
  Stack.prototype.push = value => {
    this.storage[this.size++] = value;
  }

  // removes and returns elements from the top of the stack
  Stack.prototype.pop = () => {
    if (this.size === 0) return 'stack empty - nothing to "pop"';
    let popped = this.storage[--this.size];
    delete this.storage[this.size];
    return popped;
  }
}


function Queue() {

  this.s1 = new Stack();
  this.s2 = new Stack();

  // adds element to the end of the queue
  Queue.prototype.enqueue = value => {
    this.s1.push(value);
  }

  // removes and returns element from the front of the queue
  Queue.prototype.dequeue = () => {
    while (this.s1.size > 1) {
      this.s2.push(this.s1.pop());
    }
    let dequeued = this.s1.pop();
    while(this.s2.size > 0) {
      this.s1.push(this.s2.pop());
    }
    return dequeued;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q)
