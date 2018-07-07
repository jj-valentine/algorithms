/* Given an array of integers, write a function that returns an array with all duplicates removed...

  EX:
    [1, 2, 3, 3, 4, 5, 6, 1, 1] => [1, 2, 3, 4, 5, 6]
*/

/*
SOLUTION #1:
n = # of elements in input array
RUNTIME Complexity [WST]: O(n^2)
SPACE Complexity [WST]: O(1)
NOTE:
*/

const noDuplicates = arr => {
  return arr.filter((el, i, self) => {
    return self.indexOf(el) === i;
  });
}

/*
SOLUTION #2:
n = # of elements in input array
RUNTIME Complexity [BST/WST]: O(1)
SPACE Complexity [WST]: O(n)
NOTE: Using a cache/object (HT)
*/

const noDuplicates2 = (arr, cache = {}) => {
  return arr.filter(el => cache.hasOwnProperty(el) ? false : (cache[el] = true));
}

/*
SOLUTION #3:
n = # of elements in input array
RUNTIME Complexity: O(n) [WST]
SPACE Complexity: O(n)  [WST]
NOTE: Using ES6 "Set" Object (preserves order)
*/

const noDuplicates3 = arr => [...new Set(arr)];

// TESTING:
const array = [1, 2, 3, 3, 4, 5, 6, 1, 1];
console.log(noDuplicates3(array));
