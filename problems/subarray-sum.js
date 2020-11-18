"use strict";

/* 
Given an array of integers and an integer value 'k', find the total number of continuous subarrays
whose sum is equal to 'k' 
*/

const subArraySum = (arr, k) => {
  let sum = 0;
  let subarrays = 0;
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    sum += n;
    const diffWithK = sum - k;
    if (diffWithK === 0) subarrays++;
    else if (seen[diffWithK]) subarrays += seen[diffWithK];
    seen[sum] = (seen[sum] || 0) + 1;
  }
  return subarrays;
}

console.log(subArraySum([1,2,3,1,2,-3, 3], 6));