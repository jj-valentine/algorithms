"use strict"; // TAGS: Array, Subset, Permutation, Combination, Tree, Depth First Search (DFS), Recursive, Backtracking, Difficulty: Medium, Companies: Amazon, Apple, Facebook, Google, Microsoft

/*
Part #1:

  Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. 
  Return the solution in any order.

    EX's:
      arr = [1, 2, 3] → findSubsets(arr) = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
      
      arr = [0] → findSubsets(arr) = [[], [0]]

Part #2:
  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
  The solution set must NOT contain duplicate subsets. Return the solution in any order.

    EX's:
      arr = [1, 2, 2] → findSubsetsP2(arr) = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
      
      arr = [0] → findSubsetsP2(arr) = [[], [0]]
*/

/*
SOLUTION #1 (Part #1)
n = # of integers in input array
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const findSubsets = arr => {
  let subsets = [];
  backtrackToFindSubsets();
  return subsets;

  function backtrackToFindSubsets(first = 0, combo = []) {
    subsets.push([...combo]);
    for (let i = first; i < arr.length; i++) {
      combo.push(arr[i]);
      // iterate over all other integers in array (i.e. other than 'arr[i]' to create combos that start with 'arr[i]'
      backtrackToFindSubsets(i + 1, combo);
      combo.pop()
    }
  }
}


/*
SOLUTION #2 (Part #1)
n = # of integers in input array
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const findSubsetsV2 = arr => {
  let n = arr.length, subsets = [];
  // iterating through LENGTHS of subarrays (so we want 'i' to equal 'n' before loop terminates)
  for (var len = 0; len < n + 1; len++) {
    backtrackToFindSubsets();
  }
  return subsets;

  // Q: this feels like a redundant and inefficient way of doing this because we're generating the same multiple times (right?)
  function backtrackToFindSubsets(first = 0, combo = []) {
    // consecutively add subsets of same length as the index in original array we're iterating over
    if (first === len) {
      subsets.push([...combo]);
      return;
    }
    
    for (let i = first; i < n; i++) {
      combo.push(arr[i]);
      backtrackToFindSubsets(i + 1, combo);
      combo.pop();
    } 
  }
};


/*
SOLUTION #3 (Part #1)
n = # of integers in input array
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(n) [WST]
NOTE: In this iterative approach, the space complexity is a function of the size of the largest subset. Since the largest a subset can 
be is 'n', the worst case space complexity would be: O(n)
*/

const findSubsetsV3 = arr => {
  let subsets = [[]];
  for (let i = 0; i < arr.length; i++) {
    let subLength = subsets.length
    for (let j = 0; j < subLength; j++) {
      let copy = subsets[j].slice();
      copy.push(arr[i]);
      subsets.push(copy);
    }
  }
  return subsets;
};

// TESTING:
// console.table(findSubsets([1, 2, 3])); // Expect: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// console.log(findSubsets([0])); // Expect: [[], [0]]`


/*
SOLUTION #1 (Part #2)
n = # of integers in input array
+ RUNTIME Complexity: O(nlog(n) + n * 2^n) → O(n * (log(n) + 2^n)) → O(n * 2^n) [WST] (i.e. since 2^n >>> log(n))
+ SPACE Complexity: O(n + log(n)) → O(n) [WST] / O(log(n)) [BST]
NOTE: In this iterative approach, to skip duplicate subsets, as we iterate through the array we can check to see if there are adjacent
integers that equal each other. For this to work, we must first SORT our array. Once we verify that an element is a duplicate of the 
integer that comes after it, we can save ourself from creating redundant subsets by only adding that duplicate integer to those subsets
that were JUST created by the current integer (it's original doppleganger). In other words, those subsets would represent ones created 
by adding the previous (original duplicate) integer to the subsets that came before it.
*/

const findSubsetsP2 = arr => {
  let subsets = [[]];
  arr = arr.sort((a, b) => a - b);
  let sub = 0;
  for (let i = 0; i < arr.length; i++) {
    let subLength = subsets.length
    for (sub; sub < subLength; sub++) {
      let subCopy = subsets[sub].slice();
      subCopy.push(arr[i]);
      subsets.push(subCopy);
    }
    // if next integer exists and is NOT a duplicate of the current integer, 
    // make sure we create 'n = subsets.length' new subsets for the next integer
    // OTHERWISE... if next integer is a duplicate, we want to only create new subsets from the 
    // subsets that were just created by the current integer
    if (i + 1 < arr.length && arr[i] !== arr[i + 1]) sub = 0;
  }
  return subsets;
}

/*
SOLUTION #2 (Part #2)
n = # of integers in input array
+ RUNTIME Complexity: O(n * 2^n) [WST]
+ SPACE Complexity: O(log(n) + n) → O(n) [WST]
*/

const findSubsetsP2V2 = arr => {
  arr = arr.sort((a, b) => a - b);
  let subsets = [];
  backtrackToFindSubsets();
  return subsets;

  function backtrackToFindSubsets(start = 0, combo = []) {
    subsets.push(combo.concat());
    for (let i = start; i < arr.length; i++) {
      if (i !== start && arr[i] === arr[i - 1]) continue;
      combo.push(arr[i]);
      backtrackToFindSubsets(i + 1, combo);
      combo.pop();
    }
  }
};


// TESTING:
// console.table(findSubsetsP2V2([2, 1, 2])); // // Expect:  [[], [1], [2], [1, 2], [2, 2] [1, 2, 2]]
// console.table(findSubsetsP2V2([2, 1, 2, 2])); // // Expect:  [[], [1], [2], [1, 2], [2, 2], [1, 2, 2], [2, 2, 2], [1, 2, 2, 2]]
// console.table(findSubsetsP2([3, 5, 1, 3])); // // Expect:  [[], [1], [5], [3], [1, 5], [1, 3], [5, 3], [1, 5, 3], [3, 3], [1, 3, 3], [3, 3, 5], [1, 5, 3 ,3]]
// console.log(findSubsetsP2([0])); // Expect: [[], [0]]

