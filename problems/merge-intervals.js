"use strict"; // «TAGS» Array, Merge, Interval, Overlap, LeetCode: #56, Difficulty: Medium, Companies: Snap

/*
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

  EX's:
    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] → mergeIntervals(intervals) = [[1, 6], [8, 10], [15, 18]]

    intervals = [[1, 4], [4, 5]] → mergeIntervals(intervals) = [[1, 5]]
*/

/*
SOLUTION #1
n = # of interval arrays in input array
+ RUNTIME Complexity: O(n*log(n) + n) → O(n*log(n)) [WST]
+ SPACE Complexity: O(n) [WST]
*/

const mergeIntervals = intervals => {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  return intervals.reduce((merged, currInt) => {
    // if list of merged intervals is empty, or if the last merged interval doesn't overlap with the current
    if (merged.length === 0 || merged[merged.length - 1][1] < currInt[0]) merged = merged.concat([currInt]);
    else {
      // changed the last merged interval to reflect overlap with the current
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], currInt[1]);
    }
    return merged;
  }, []);
}


/*
SOLUTION #2 (First Attempt -- Overcomplicated)
n = # of interval arrays in input array
+ RUNTIME Complexity: O(n*log(n) + n) → O(n*log(n)) [WST]
+ SPACE Complexity: O(1) [WST] -- Aside from output storage: O(n)
*/

const mergeIntervalsV2 = intervals => {
  if (intervals.length === 1) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]); // TC: O(n*log(n))
  let merged = [], lastInterval = intervals[0], addLastInterval = true;
  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    while (currInterval && lastInterval[1] >= currInterval[0]) {
      if (lastInterval[1] > currInterval[1]) currInterval = lastInterval;
      else currInterval[0] = lastInterval[0];
      lastInterval = currInterval;
      currInterval = intervals[++i];
      if (!currInterval) addLastInterval = false;
    }
    merged.push(lastInterval);
    lastInterval = currInterval;
  }
  return addLastInterval ? merged.concat([lastInterval]) : merged;
};

// TESTING:
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Expect: [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1, 4], [4, 5]])); // Expect: [[1, 5]]
console.log(mergeIntervals([[1, 4], [0, 4]])); // Expect: [[0, 4]]
console.log(mergeIntervals([[1, 4], [2, 3]])); // Expect: [[1, 4]]
console.log(mergeIntervals([[1, 3]])); // Expect: [[1, 3]]
