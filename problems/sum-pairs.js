/*
Given an array of integers and a target number, return an array arrays of all pairs that sum up to the target number.

EX: [1, 3, 2, 4, 5, 46, 6, 7] => [[1, 4], [3, 2]]
*/

const sumPairs = (arr, target) => {
  let uniq = [...new Set(arr)];
  let pairs = [], nums = {};
  for (let i = 0; i < uniq.length; i++) {
    if (nums[target - uniq[i]]) {
      pairs.push([target - uniq[i], uniq[i]]);
    } else {
      nums[uniq[i]] = true;
    }
  }
  return pairs;
}

let array = [1, 3, 2, 2, 4, 5, 46, 6, 7];
console.log(sumPairs(array, 5));
