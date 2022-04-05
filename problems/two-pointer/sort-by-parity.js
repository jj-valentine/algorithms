"use strict"; // TAGS: Array, Sorting, Two Pointer, In-Place, Constant Space Complexity, Linear Time Complexity, Segregate, Parity, Even, Odd, Unordered, LC: #905 (Easy), IK: Sorting, Companies: Amazon, Facebook, Google, Microsoft

/*
Given an array of integers, rearrange them IN-PLACE so that all of the even numbers appear before odd ones. 
Return an array satisfying said condition regardless of the relative ordering of integers (i.e. '4' can come before '2').

  EX's:
    arr = [3, 1, 2, 4] → sortByParity(arr) = [2, 4, 3, 1]
      EXPLANATION -- the outputs [4, 2, 3, 1], [2, 4, 1, 3], and [4, 2, 1, 3] would also be accepted
    
    arr = [0] → sortByParity(arr) = [0]
*/

/*
SOLUTION #1 
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Implement a "Two Pointer" approach...
*/

const sortByParity = arr => {
  if (!arr || !arr.length) return;
  if (arr.length < 2) return arr;
  const isEven = n => n % 2 === 0;
  const havePointersCrossed = (l, r) => l >= r;
  let left = 0, right = arr.length - 1;
  while (!havePointersCrossed(left, right)) {
    while (isEven(arr[left]) && !havePointersCrossed(left, right)) left++;
    while (!isEven(arr[right]) && !havePointersCrossed(left, right)) right--;

    if (havePointersCrossed(left, right)) return arr;
    /* swap integers and move both pointers */
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  return arr;
};

/*
SOLUTION #2
n = # of elements in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Implement a MORE ELEGANT "Two-Pointer" solution/approach...
*/

const sortByParityV2 = arr => {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (arr[l] % 2 !== 0) [arr[l], arr[r--]] = [arr[r], arr[l]];
    else l++;
  }

  return arr;
};

// TESTING:
console.log(sortByParityV2([0])); // Expect: [0]
console.log(sortByParityV2([3, 1, 2, 4])); // Expect: [4, 2, 1, 3]
console.log(sortByParityV2([1, 2, 4, 9, 7, 8, 6])); // Expect: [6, 2, 4, 8, 7, 9, 1]