"use strict";


// design a runtime cache -- a "byte buffer": 
  // 2 methods, and a size
  // write(bits) -- input is an array of bits -- 
  // read(bits, size) -- input is an array of bits -- start from beginning and ends at idx = size - 1

// a structure that can read bytes 
// 00000001 (byte: 8 bits)


function ByteBuffer(size) {
  this.size = size;
  this.store = new Array(this.size).fill(0);
  this.idx = 0;

  function write(bytes) {
    for (var i = 0; i < bytes.length; i++) {
      this.store[i + this.idx] = bytes[i];
    }
    this.idx += i;
  }

  function read(bytes, readAmount) {

  }

}


// let bb = new ByteBuffer(10);
// let bits = [1, 2, 3, 4];
// let bits2 = [5, 6, 7, 8];
// let writeInto = [0, 0, 0, 0, 0];
// bb.write(bits);
// bb.write(bits2);
// bb.read(writeInto, 5);
// console.log(writeInto); // [1, 2, 3, 4, 5]
// bb.read(writeInfo, 3); 
// console.log(writeInto); // [6, 7, 8, 4, 5]

/* 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures? 
*/



