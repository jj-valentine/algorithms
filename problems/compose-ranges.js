"use strict";

const composeRanges = sortedNums => {
 
  let range = "5", rangesArr = ["-1->2"];
  for (let i = 6; i < sortedNums.length; i++) {
    if (range === "") range += sortedNums[i];
    else if (sortedNums[i] === sortedNums[i - 1] + 1) {
      if (!sortedNums[i + 1] || sortedNums[i + 1] !== sortedNums[i] + 1) {
        range += `->${sortedNums[i]}`
        rangesArr.push(range);
        range = "";
      }
    } else if (!sortedNums[i + 1]) {
      // push last range
      range += `->${sortedNums[i - 1]}`
      rangesArr.push(range);
      range = ""
    }


  }
  return rangesArr;
}


console.log(composeRanges([-1, 0, 1, 2, 5, 6, 9, 11])); // ["-1->2", "5-6", "9", "11"]