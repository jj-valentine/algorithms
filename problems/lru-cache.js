"use strict";

/* 
Your task is to implement a LRU cache.

LRU caches are often used to implement caches which you do not want to grow indefinitely.
The cache has a max size, and when a new key is inserted that exceeds its capacity, 
the key which has not been accessed for the longest time is removed to make space.

It should support the following operations:
  + 'get(key)': get the value of the key if the key exists in the cache
  + 'put(key, value)': update or insert the value if the key is not already present. When the cache has reached its capacity, 
    it should invalidate the least recently used item before inserting a new item

NOTE: What happens if you call 'get(key)' on a key which doesn't exist in the cache is up to you to define!
*/

/*
SOLUTION #1
n = current length of cache
+ RUNTIME Complexity 
  * Access [get(key)]: O(1)
  * Insertion [put(key, value)]: O(n) 
+ SPACE Complexity: O(n)
NOTE: BRUTE FORCE approach -- Using an array for the cache would force us to loop through it every time we're looking for a key 
(and also, shift up to 'n' elements after we "update" a value that we've accessed). So even though it would simplify 
adding keys because we could just push them to the end (allowing us to nix the Date() system), we sacrifice runtime as a result. 
If we use an object, however, we can "get" keys and "put" them back after updating their access time -- Date(), both in O(1) time.
The down side to using an object/hashmap is that when we attempt to "put" a value while the cache is at capacity, we must iterate through 
our key/value pairs to find the LRU pair; this will always take O(n) time
*/

function LRUCache(capacity) {
  let cache = {};
  let length = 0;

  function get(key) {
    if (cache[key]) {
      const updatedDate = new Date();
      const value = cache[key].value
      cache[key] = { 
        value, date: updatedDate 
      };
      return value;
    } else {
      console.log("Sorry, there are no values matched to that key!");
      return null;
    }
  }

  function put(key, value) {
    if (!key || !value) {
      console.log("Please submit both a KEY and a VALUE");
      return null;
    }
    if (cache[key]) {
      console.log("Sorry, that key already exists!");
      return null;
    }
    if (length === capacity) {
      const now = new Date();
      let biggestDiff = 0;
      let oldestKey;
      Object.keys(cache).forEach(currKey => {
        const diff = Math.abs(now - cache[currKey].date);
        if (diff > biggestDiff) {
          biggestDiff = diff;
          oldestKey = currKey;
        } 
      });
      delete cache[oldestKey];
      length--;
    } 
    cache[key] = { value, date: new Date() }
    length++;    
    return cache[key].value;
  }

  return {
    get,
    put
  }
}


/*
SOLUTION #2
n = current length of cache
+ RUNTIME Complexity 
  * Access [i.e. 'get(key)']: O(1)
  * Insertion [i.e. 'put(key, value)']: O(1) 
+ SPACE Complexity: O(n)
NOTE: Using DOUBLY LINKED LIST alongside an object/hashmap for our cache, allows us to reduce both our 'get' and 'put' methods to O(1) time
*/

function LRUCacheV2(capacity) {
  function Node(value, key, next) {
    this.value = value;
    this.key = key;
    this.prev = null;
    this.next = next || null;
  }

  this.capacity = capacity;
  this.cache = {};
  this.head = null;
  this.tail = null;
  this.length = 0;
  LRUCacheV2.prototype.get = key => {
    // key doesn't exist
    if (!this.cache[key]) return null;
    else { // key/value pair exists
      // retrieve node from cache
      let node = this.cache[key];
      // remove node from list
      removeNode.call(this, node);
      // add node to front of list (MRU)
      addToFront.call(this, node);
      return node.value;
    }
  }

  LRUCacheV2.prototype.put = (key, value) => {
    // key already exists
    if (this.cache[key] !== undefined) return null;
    else {
      let node = new Node(value, key);
      if (this.length === this.capacity) {
        // delete LRU key/value pair from cache
        delete this.cache[this.tail.key];
        // remove LRU node from the end of the list
        removeNode.call(this, this.tail);
      } else {
        this.length++;
      }
      addToFront.call(this, node);
      // store in cache
      this.cache[key] = node;
    }
  }
  
  function addToFront(node) {
    // list/cache is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else { // at least one entry/node in list/cache
      let prevHead = this.head;
      node.next = prevHead;
      prevHead.prev = node;
      this.head = node;
    }
  }

  function removeNode(node) {
    // only one node in list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else { // more than one node in list
      // remove from end of list
      if (!node.next) {
        this.tail = node.prev;
        this.tail.next = null;
        node.prev = null;
      } else if (!node.prev) { // remove from beginning of list (only happens when we have ONE node)
        this.head = node.next;
        node.next = null;
        this.head.prev = null;
      } else { // remove from middle of list
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = node.next;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
      }
    }
  }
}

// TESTING:
let lru = new LRUCacheV2(3);
// lru.put(1, "hey");
// lru.put(2, "ho");
// console.log(lru);
// lru.put(3, "hi");
// console.log(lru);
// console.log(lru.get(2));
// console.log(lru);
// lru.put(4, "hee");
// console.log(lru);
// console.log(lru.get(3));
// console.log(lru);




