"use strict";

/* 
Your task is to implement a LRU cache.

LRU caches are often used to implement caches which you do not want to grow indefinitely.
The cache has a max size, and when a new key is inserted that would it grow larger than its max size,
the key which has not been accessed for the longest time is removed to make space.

It should support the following operations:

+ get(key): get the value of the key if the key exists in the cache
+ put(key, value): update or insert the value if the key is not already present. When the cache
has reached its capacity, it should invalidate the least recently used item before inserting a new item.

NOTE: What happens if you call get(key) on a key which doesn't exist in the cache is up to you to define.
*/

/*
SOLUTION #1
n: current length of cache
+ RUNTIME Complexity 
  * Access [get(key)]: O(1)
  * Insertion [put(key)]: O(n) 
+ SPACE Complexity: O(n)
NOTE: BRUTE FORCE method -- Using an array for the cache would force us to loop through it every time we're looking for a key.
So even though it would simplify adding keys because we could just push them to the end, and we could nix the date object system,
we sacrifice runtime. If we use an object, however, we can "get" keys in O(1).
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
n: current length of cache
+ RUNTIME Complexity 
  * Access [get(key)]: O(1)
  * Insertion [put(key)]: O(1) 
+ SPACE Complexity: O(n)
NOTE: Use DOUBLY LINKED LIST (allowing us to reduce runtime for both methods to O(1))
*/

function LRUCacheV2() {
  function Node(val, nxt) {
    this.value = val;
    this.prev = null;
    this.next = nxt || null;
  }

  
}








