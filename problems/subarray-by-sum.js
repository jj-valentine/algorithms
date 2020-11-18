/* 
Given an array of integers, find the longest subarray with elements that add up to the given sum 

  EX:
    s = 15
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    output = [1, 3]
*/

/*
SOLUTION #1: 
n = # of elements in input array
+ RUNTIME Complexity:[WST]
+ SPACE Complexity:  [BST/WST]
NOTE: 
*/
const subarrayBySum = (sum, arr) => {
  // loop through array
  // for each element, add to the the total, then move to next element
  let total, length = -1, range = [-1];
  for (let i = 0; i < arr.length; i++) {
    total = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (total === sum) {
        if (j - i > length) {
          length = j - i;
          range = [i, j];
          console.log(range)
        }
      } else if (total > sum) break;
      total += arr[j];
    }
    console.log(total)
  }
  return range;

}


console.log(JSON.stringify(subarrayBySum(3 ,[1, 2, 3])));