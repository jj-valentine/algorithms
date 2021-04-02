"use strict";

function Node(value, next) {
  this.value = value;
  this.prev = null;
  this.next = next || null;
}

function DoublyLinkedList() {

  this.head = null;
  this.tail = null;
  this.length = 0

    /* add node to end (tail) of list   */
    DoublyLinkedList.prototype.push = value => {
    let newNode = new Node(value);
    // list is empty (no nodes)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { // have at least one node in list
      let temp = this.tail;
      this.tail = newNode;
      newNode.prev = temp;
      temp.next = newNode;
    }
    this.length++;
    return this;
  }

  /* remove last (tail) node from list */  
  DoublyLinkedList.prototype.pop = () => {
    // nothing to pop
    if (!this.head) return undefined;
    let popped = this.tail;
    // only have one node in list
    if (this.head === this.tail) { 
      this.head = null;
      this.tail = null;
    } else { // have more than one node in list
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
      // another "messier" way to do this (does this work in all cases?)
        // this.tail.prev.next = null;
        // this.tail = this.tail.prev;
    }
    this.length--;
    return popped;
  }

  /* remove node from head of list */
  DoublyLinkedList.prototype.shift = () => {
    // nothing to shift
    if (!this.head) return undefined;
    // only have one node in list
    let shifted = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else { // have more than one node in list
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  /* add node to front (head) of list */  
  DoublyLinkedList.prototype.unshift = value => {
    let newNode = new Node(value, this.head);
    // list is empty (no nodes) 
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { // have at least one node in list
      let prevHead = this.head;
      prevHead.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* insert node with given value at given index/position */
  DoublyLinkedList.prototype.insert = (value, index) => {
    // list is empty, or index is "out of bounds"
    if (!this.head || index > this.length - 1 || index < 0) return undefined;
    // replace single node with new node
    if (this.length === 1) {
      this.pop();
      return this.push(value);
    }
    let newNode = new Node(value);
    // insert new node at beginning of list
    if (index === 0) {
      let nextNode = this.head.next;
      this.head.next = null;
      nextNode.prev = newNode;
      newNode.next = nextNode;
      this.head = newNode;
    } else if (index === list.length - 1) { // insert new node at end of list
      let prevNode = this.tail.prev;
      this.tail.prev = null;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      this.tail = newNode;
    } else { // insert new node in the middle of list (between head and tail, at 'index')
      let curr = this.head.next;
      let currIndex = 1;
      while (curr) {
        if (currIndex === index) {
          let prevNode = curr.prev;
          let nextNode = curr.next;
          curr.prev = null;
          curr.next = null;
          prevNode.next = newNode;
          nextNode.prev = newNode;
          newNode.prev = prevNode;
          newNode.next = nextNode;
          break;
        }
        curr = curr.next;
        currIndex++;
      }
    }
    return this;
  }

  /* remove node at given index */
  DoublyLinkedList.prototype.remove = index => {
    // list is empty, or index is "out of bounds"
    if (!this.head || index > this.length - 1 || index < 0) return undefined;
    else if (index === 0) { // remove first node from list
      return this.shift();
    } else if (index === this.length - 1) { // remove last node from list
      return this.pop();
    } else { // remove node from middle of list (between head and tail, at 'index')
      let removed = this.head.next;
      let currIndex = 1;
      while (removed) {
        if (currIndex === index) {
          let prevNode = removed.prev;
          let nextNode = removed.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          removed.next = null;
          removed.prev = null;
          this.length--;
          return removed;
        }
        removed = removed.next;
        currIndex++;
      }
      return undefined;
    }
  }
}


