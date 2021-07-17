"use strict";

const { performance } = require('perf_hooks');

function getAveragePerformanceTime(fn, precision = 6, iterations = 1000) {
  let totalTime = 0;
  for (let i = 0; i < iterations + 1; i++) {
    let start = performance.now();
    fn();
    let end = performance.now();
    if (i > 0) totalTime += (end - start);
  }
  let avgTime = (totalTime / iterations).toFixed(precision);
  console.log("Average Execution Time: " + avgTime + "ms");
  return avgTime;
}

module.exports = { 
  getAveragePerformanceTime
};

