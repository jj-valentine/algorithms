"use strict"; // TAGS:

/*
Find the median between two sorted arrays
*/

/*
n = # of elements in input array
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
⇲ note We can implement a binary search-type a approach here. First, find the median of each array and compare them. 
Then, take the top half of the array with the smaller median and the bottom half of the array with the larger median
and then run 'findMedian' again with the "new" arrays. When an array gets down to one element, we must decide if we need
to keep considering it.
*/


// 1) if total length of both original arrays is even, we know we're going to have to split the last the two elements
//    if not, we know one of the numbers in one of the arrays is going to be our median 
// 2) keep comparing medians of arrays until both arrays are either two or one elements long
  // in the case that the total length of arrays is odd
    // if the single number is less than the smallest element, median is smallest element from bigger array
    // if single number is bigger than the largest element, median is bigger number in 
const findMedianOfArrays = (a1, a2) => {
  
};

// TESTING:
console.log(findMedianOfArrays([1, 3, 4, 5], [2, 6, 7, 8]));
// console.log([1,2,3].slice(0, 2));
