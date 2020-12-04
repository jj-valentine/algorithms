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

  // adds a node to the end of the list [Insertion: O(1)]
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

  // returns true if given value is present in the list [Search: O(n)]
  LinkedList.prototype.contains = value => {
    if (this.size === 0) return 'list empty!';
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  };

  // adds node to the beginning of the list
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

  // inserts element into list at the specified position
  LinkedList.prototype.insert = (value, position) => {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curr = this.head, node = 1;
      while (curr !== null && node !== position) {
        curr = curr.next;
      }
      let list = curr;

    }
  };

  // removes first occurrence of value from list
  LinkedList.prototype.removeItem = value => {

  };

  // removes element at specified position in list
  LinkedList.prototype.removePosition = position => {

  };
}

