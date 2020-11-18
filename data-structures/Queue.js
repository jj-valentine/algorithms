"use strict";


/*
[AVG/WST] RUNTIME Complexity:
  * Access -- O(n)
  * Search -- O(n)
  * Insertion -- O(1)
  * Deletion -- O(1)
[WST] SPACE Complexity: O(n)
*/

function Queue() {
  this.storage = {};
  this.index = 0;
  this.first = 0;

  // adds element to the end of the queue
  Queue.prototype.enqueue = value => {
    this.storage[this.index++] = value;
  }

  // removes element from the beginning of the queue
  // NOTE: If we don't care to re-index through iterating over our queue everytime we remove an element, 
  // we can save on time complexity by adding another reference property to our Queue object (i.e. first)
  Queue.prototype.dequeue = () => {
    if (this.index - this.first === 0) return 'queue empty!';
    let dequeued = this.storage[this.first];
    delete this.storage[this.first++];
    return dequeued;
  }

  // Queue.prototype.dequeue = () => {
  //   if (this.index === 0) return 'queue empty -- no elements to dequeue!';
  //   let dequeued = this.storage[0];
  //   for (let i = 0; i < this.index - 1; i++) {
  //     this.storage[i] = this.storage[i + 1]
  //   }
  //   delete this.storage[--this.index];
  //   return dequeued;
  // }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q)
console.log(q.dequeue());
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


