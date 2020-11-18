/*
Given an array of integers and a target number, write a function that returns true if 
there is a subset of the array that sums up to the target and returns false otherwise. 
A subset can be any size, and the elements do not have to appear consecutively in the array.
*/


function subsetSum(arr, target) {
  // create array of all possible combinations of numbers
  let sets = [[]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      sets.push(sets[j].concat(arr[i]));
    }
  }
  for (let k = 0; k < sets.length; k++) {
    let sum = 0;
    for (let l = 0; l < sets.length; l++) {
      sum += sets[k][l];
      if (sum === target) return true;
    }
  }
  return false;
}


// TESTING:
console.log(subsetSum([1, 2, 3], 5)); // → true, 3 + 2 = 5
console.log(subsetSum([3, 7, 4, 2], 5)); // → true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // → true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // → false
console.log(subsetSum([8, -2, 1, -3], 6)); // → true, 8 + 1 + (-3) = 6
