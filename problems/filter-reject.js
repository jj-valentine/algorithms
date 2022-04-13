"use strict";

/*
FILTER: Iterates over elements of collection returning an array of all the elements the callback returns truthy for.

REJECT: Removes all elements from array that callback returns truthy for and returns an array of the remaining elements. CHALLENGE: use filter.
*/

/*
SOLUTION: Filter

RUNTIME Complexity: O()
SPACE Complexity: O()

⇲ note
*/

function filter(collection, callback) {
  if (Array.isArray(collection)) {
    let newArr = [];
    collection.forEach(function (el) {
      if (callback(el)) newArr.push(el);
    });
    return newArr;
  } else if (typeof collection === 'object'){
    let newobj = {};
    for (let keys in collection) {
      if (callback(collection[keys])) newobj[keys] = collection[keys];
    }
    return newobj;
  }
  return 'Collection must be an Array or Object';
}

// TESTING Filter:
console.log('filter (array):', filter([1, 2, 3, 4], function(element, index, array) {
  return element % 2 === 0;
})); // -> [2, 4]
console.log('filter (object):', filter({'a': 1, 'b': 2, 'c': 3, 'd': 4}, function(value, key, collection) {
  return value % 2 !== 0;
})); // -> {'a': 1, 'c': 3}


/*
SOLUTION: Reject

RUNTIME Complexity: O()
SPACE Complexity: O()

⇲ note
*/

function reject (collection, callback) {
  let trueArr = filter(collection, callback);
  if (Array.isArray(collection)) {
    return difference(collection, trueArr);
  } else {
    let newObj = {};
    Object.keys(collection).forEach( function(el) {
      if (!trueArr[el]) newObj[el] = collection[el];
    })
    return newObj;
  }
}

// difference (helper function) -- returns an array containing elements from a1 that are not in a2
function difference(a1, a2, diff = []) {
  a1.forEach(el => { if (!a2.includes(el)) diff.push(el) });
  return diff;
}

// TESTING Reject:
console.log('reject (array):', reject([1, 2, 3, 4], function(element, index, collection) {
  return element % 2 === 0;
}));
console.log('reject (object):', reject({'a': 1, 'b': 2, 'c': 3, 'd': 4}, function(value, key, collection) {
  return value % 2 !== 0;
}));
