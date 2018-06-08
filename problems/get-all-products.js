/* Accepts an array of integers and returns an array of all the possible products made by multiplying all but one number. In other words, find all the products of multiplying any array.length - 1 numbers in the array.

  EX:
  * getProducts([1, 7, 3, 4]); -> [84, 12, 28, 21]
  * which is done via: [7*3*4, 1*3*4, 1*7*4, 1*7*3]

HINT: do not use division, because zero might be in the array and you cannot divide by zero. */

/*
SOLUTION #1
n = elements in passed-in array
[WST] RUNTIME Complexity: O(n)
[WST] SPACE Complexity: O(n)
NOTE:
*/

function getAllProducts(arr) {
  let top = [], bottom = [];
  for (let i = 0, p = 1; i < arr.length; p *= arr[i++]) {
    top[i] = p;
  }
  for (let i = arr.length - 1, p = 1; i >= 0; p *= arr[i--]) {
    bottom[i] = p;
  }
  return arr.map((el, i) => top[i] * bottom[i]);
}

/*
SOLUTION #2
n = length of incoming array
N = length of new array to be filled
[WST] RUNTIME Complexity: O(n^2)
[WST] SPACE Complexity: O(N)
NOTE:
*/

function getAllProducts2(arr) {
  let multiples = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) prod *= arr[j];
    }
    multiples.push(prod);
  }
  return multiples;
}

const array = [1, 7, 3, 4];
console.log(getAllProducts(array));
