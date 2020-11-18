"use strict";

function Node(val, nxt) {
  this.value = val;
  this.prev = null;
  this.next = nxt || null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0

  /* add node to end (tail) of list */  
  DoublyLinkedList.prototype.push = value => {
    let node = new Node(value);
    // list is empty (no nodes)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else { // have at least one node in list
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
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
    let node = new Node(value, this.head);
    // list is empty (no nodes) 
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else { // have at least one node in list
      let prevHead = this.head;
      prevHead.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  DoublyLinkedList.prototype.insert = (index, value) => {

  }

  DoublyLinkedList.prototype.remove = index => {
    // index is "out of bounds"
    if (index > this.length - 1 || index < 0) return undefined;
    else if (index === 0) { // remove first node from list
      this.shift();
    } else if (index === this.length - 1) { // remove last node from list
      this.pop();
    } else { // remove node from "inside" list (somewhere between head and tail)
      // loop through list until we find index
    }
  }
    
}


let list = new DoublyLinkedList();
list.push(1);
console.log(list.push(2));
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
list.push(1);
list.push(2);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list.shift());
console.log(list);
console.log(list.unshift(2));
console.log(list.unshift(1));
console.log(list.unshift(0));



