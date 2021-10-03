"use strict"; // TAGS: Array, Sort, Flip, Pancake, Greedy, Leetcode: #969, Difficulty: Medium, Companies: Google

/*
Given an array of integers 'arr', write a function 'flip(arr, k)' that reverses the order of the first 'k' elements in the array.
Then, write a function that sorts and returns the input array (i.e. 'pancakeSort(arr)'). You are only allowed to use the 'flip' function you wrote to mutate and
make changes in the array

Alternative Algorithm (Add Commented Out Lines):
  Return an array of the 'k'-values corresponding to a sequence of pancake flips that sort 'arr'. 
  Any valid answer that sorts the array within '10' * 'arr.length' flips will be judged as correct

  NOTE: It’s called "pancake sort" because it resembles sorting pancakes on a plate with a spatula!

  EX's:
    arr = [3, 2, 4, 1] → pancakeSort(arr) = [1, 2, 3, 4]
      EXPLANATION -- We perform '4' pancake flips, with 'k' values '4', '2', '4', and '3'
        Starting State: arr = [3, 2, 4, 1]
        After FIRST flip (k = 4) → arr = [1, 4, 2, 3]
        After SECOND flip (k = 2) → arr = [4, 1, 2, 3]
        After THIRD flip (k = 4) → arr = [3, 2, 1, 4]
        After FOURTH flip (k = 3) → arr = [1, 2, 3, 4] (which is sorted)

    arr = [1, 2, 3] → pancakeSort(arr) = [1, 2, 3]
*/

/*
n = # of integers in input array
+ RUNTIME Complexity: O(n^2) [WST]
+ SPACE Complexity: O(1) [WST]
NOTE: Like most sorting algorithms, we should be able to boil our solution down to a single operation that can then be repeated to sort our entire array. 
In this case, we can start by locating the maximum integer (between indices '0' and 'arr.length - 1', then placing that integer in the last slot of the array.
This operation will require two "flips": When we located the maximum integer (at index 'k'), we can "flip" the first 'k' elements, thereby placing the maximum
integer at the front of the array. Next, we can "flip" the entire array in order to place the maximum integer in the last slot in the array. These steps can be
repeated for the second largest integer, the third largest integer, and so on, which we can find on each itearation by searching the remaining UNSORTED portion 
of the array. It's important to note, however, that the index at which we're placing these subsequent integers will decrease by '1' for each new maximum integer. 
Furthermore, when we perform our second "flip" for each integers, we're only required to "flip" the still UNSORTED portion of the array, which will naturally 
decrease in size as we go!
*/

const flip = (arr, k) => {
  for (let i = 0; i < Math.ceil(k / 2); i++) {
    [arr[i], arr[k - i]] = [arr[k - i], arr[i]];
  }
};

const pancakeSortV1 = arr => {
  if (arr.length < 2) return arr;
  // let kValues = [];
  let unsortedEnd = arr.length;
  while (unsortedEnd > 0) { // TC: O(n) [WST]
    let max = arr[0], maxIdx = 0;
    let alreadySorted = true;
    for (let i = 1; i < unsortedEnd; i++) {
      if (arr[i] < arr[i - 1] && alreadySorted) alreadySorted = false;
      if (arr[i] > max) {
        max = arr[i];
        maxIdx = i;
      }
    }
    
    /* can skip "sorting"/"flipping" rest of array if "UNSORTED" portion is already sorted already sorted */
    if (alreadySorted) return arr;
    unsortedEnd--;
    /* can avoid "flipping" elements that are already positioned at their correct/sorted index */
    if (unsortedEnd !== maxIdx) {
      if (maxIdx) {
        flip(arr, maxIdx); // TC: O(maxIdx / 2) → O(n) [WST]
        // kValues.push(maxIdx + 1);
      }

      flip(arr, unsortedEnd); // TC: O(unsortedEnd / 2) → O(n) [WST]
      // kValues.push(unsortedEnd + 1);
    }
  }

  return arr;
  // return kValues;
};

// TESTING:
console.log(pancakeSortV1([3, 2, 4, 1])); // Expect: [1, 2, 3, 4]
// console.log(pancakeSortV1([1, 5, 4, 3, 2])); // Expect: [1, 2, 3, 4, 5]
// console.log(pancakeSortV1([98, 76, 88, 3, 240, 19, 7])); // Expect: [3, 7, 19, 76, 88, 98, 240]

