"use strict"; // «TAGS» Array, Unsorted, Duplicates, Cyclic Sort, Constant Space, LeetCode: #442, Difficulty: Medium, Companies: Amazon, Facebook

/*
 Given an integer array of length 'n', where all the integers in the array fall within the range '[1, n]' and each integer appears only once or twice, 
return an array of all of the integers that appear twice
  
  ⇲ note You must write an algorithm that runs in O(n) time and uses constant extra space

    EX's:
      arr = [4, 3, 2, 7, 8, 2, 3, 1] → findAllDuplicates(arr) = [2, 3]
      
      arr = [1, 1, 2] → findAllDuplicates(arr) = [1]

      arr = [1] → findAllDuplicates(arr) = []
*/

/*
SOLUTION #1
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
⇲ note Employ 'Cyclic Sort' Approach/Pattern...
*/

const findAllDuplicates = arr => {
  let i = 0;
  while (i < arr.length) {
    let idx = arr[i] - 1;
    if (arr[i] !== arr[idx]) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    else i++;
  }

  /* using 'reduce' is FAR less efficient in runtime (for some reason)! */
  let duplicates = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j + 1) duplicates.push(arr[j]);
  }

  return duplicates;
  // return arr.reduce((duplicates, n, i) => n !== i + 1 ? duplicates.concat(n) : duplicates, []);
};


/*
SOLUTION #2
n = # of integers in input array
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const findAllDuplicatesV2 = arr => {
  let duplicates = new Set();
  /* for each integer 'x' in array, change the sign of the integer lying at index 'Math.absolute(arr[x]) - 1'...
  on the second iteration/call, only change the sign of those integers that remain positive */ 
  const changeSign = (findPositives = false) => {
    for (let i = 0; i < arr.length; i++) {
      let idx = Math.abs(arr[i]) - 1;
      if (findPositives) {
        if (Math.sign(arr[idx]) === 1) {
          duplicates.add(Math.abs(arr[i]));
          arr[idx] = -arr[idx];
        }
       } else arr[idx] = -arr[idx];
    }
  };

  changeSign();
  changeSign(true);

  return [...duplicates];
};

// TESTING:
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Expect: [2, 3]
console.log(findAllDuplicates([10, 2, 5, 10, 9, 1, 1, 4, 3, 7])); // Expect: [10, 1]