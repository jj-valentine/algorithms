"use strict"; 

/*
Do your best to implement the native Array function, "reduce"
*/

/*
n = # of elements in array being "reduced"
+ RUNTIME Complexity: O(n) [BST] -- seems like this would depend on the "reducer" function (and it's accumulator)
+ SPACE Complexity: O(1) [BST] -- seems like this would depend on the "reducer" function (and it's accumulator)
NOTE: The 'reduce' method executes a "reducer" function (provided by the user) on each element of the array that it's called on, resulting in a single output value. On each iteration, of the
input array, the user's "reducer" function's returned value will be assigned to the accumulator (it's value is "remembered" across each iteration and ultimately becomes the final single
resulting value). 

Reduce takes the following TWO arguments: 1) a "reducer" (callback) function, and 2) an (optional) initial value (if called without this second argument, the first element in the array 
will be assigned to the initial value parameter). Furthermore, the "reducer" function takes the following FOUR arguments: 1) an accumulator value, 2) the current element of input array, 
3) the current index of input array (optional), and 4) the source/input array (optional).
*/

function MyArray(...arr) {
  this.arr = {};
  this.length = 0;

  // fill array-like object
  for (let idx in arr) {
    let value = arr[idx];
    this.arr[idx] = value;
    this.length += 1;
  }

  MyArray.prototype.myReduce = (reducer, initialValue) => {
    let i = 0;
    if (initialValue === undefined) {
      initialValue = this.arr[i++];
    }
    let acc = initialValue;
    for (; i < this.length; i++) {
      let currentValue = this.arr[i];
      acc = reducer(acc, currentValue, i, this.arr);
    }
    return acc;
  }
}

// TESTING:
let newArray = new MyArray(1, 2, 3);
let reduced = newArray.myReduce((sum, n) => sum + n, []);
reduced = newArray.myReduce((onlyOdds, n) => {
  if (n % 2 !== 0) onlyOdds = onlyOdds.concat([n]);
  return onlyOdds;
}, [-1]);
console.log(reduced);
