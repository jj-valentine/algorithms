"use strict";

/* 
Let's define digit degree of some positive integer as the number of times 
we need to replace this number with the sum of its digits until we get to a 
one digit number. Given an integer, find its digit degree. 

  EX's:
    n = 5 → digitDegree(n) = 0
    n = 100 → digitDegree(n) = 1, since 1 + 0 + 0 = 1
    n = 91 → digitDegree(n) = 2, since 9 + 1 = 10 and 1 + 0 = 1
*/

const digitDegree = (n, count = 0) => {
  if (n < 10) return count;
  return digitDegree([...(n + '')].map(Number).reduce((d,t) => d + t, 0), ++count);
}