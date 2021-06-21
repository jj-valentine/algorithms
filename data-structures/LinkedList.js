"use strict";

/*
+ RUNTIME Complexity [WST]
  * Access: O(n)
  * Search: O(n)
  * Insertion: O(1)
  * Deletion: O(1)
+ SPACE Complexity: O(n)
*/

function Node(val, nxt) {
  this.value = val;
  this.next = nxt || null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;

  /* add a node to the end of the list [Insertion: O(1)] */
  LinkedList.prototype.push = value => {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  };

  /* return true if given value is present in the list [Search: O(n)] */
  LinkedList.prototype.contains = value => {
    if (this.size === 0) return 'list empty!';
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  };

  /* add node to the beginning of the list */
  LinkedList.prototype.addToHead = value => {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let list = this.head;
      this.head = newNode;
      this.head.next = list;
    }
    return ++this.size;
  };

  // FIXME: 
  /* insert element into list at the specified position */
  LinkedList.prototype.insert = (value, position) => {
    if (position > this.size + 1) return null;
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curr = this.head, count = 0;
      while (curr !== null && count !== position) {
        curr = curr.next;
        count++;
      }
      console.log(curr);
      let temp = curr.next;
      curr.next = newNode;
      newNode.next = temp;
    }
    this.size++;
  };

  /* remove first occurrence of value from list */
  LinkedList.prototype.removeItem = value => {
    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      if (curr.value === value) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else if (curr === this.head) {
          this.head = curr.next;
        } else if (curr === this.tail) {
          this.tail = prev;
        }
        if (prev) prev.next = curr.next;
        this.size--;
      } 

      prev = curr;
      curr = curr.next
    }
  };

  // FIXME: 
  /* removes element at specified position (index) in list */
  LinkedList.prototype.removePosition = idx => {
    let curr = this.head;
    let prev = null;
    let count = 0;

    if (idx === 0) {
      if (this.size === 1) {
        this.head = null
        this.tail === null;
      } else {
        this.head = curr.next;
      }  
    } else {
      while (curr !== null && count !== idx) {

        curr = curr.next;
        if (count === idx) {
  
        }
        count++;
      }
    }
  };
}

// TESTING:
let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
list.removeItem(2);
console.log(list);
list.insert(4, 1)
console.log(list);
// list.removeItem(3);
// console.log(list);
// list.removeItem(1);
// console.log(list);