"use strict";

/* 
Let's say 'n' people go on a trip together, and each spend some amount of money. Write a function that accepts an
array whose indices represent each person that went on the trip, and whose associated values represent the
amount that each given person spent on the trip. Your function should...
  "print out how to evenly split the total amount spent between every person that went on the trip, 
   while minimizing the number of required transactions"
*/

function splitAndMinimize(spent, avg, trans = 0) {
  if (trans === 0) {
    spent.sort((a, b) => a - b);
    avg = spent.reduce((total, n) => total += n) / spent.length
  }
  var i = 0, j = 0;
  if (spent.length === 0) return trans;
  let toSplit = spent[spent.length - j - 1] - avg; // 2
  var toGive; // 4  
  console.log(spent);
  
  while (i < spent.length && toSplit !== 0) {
    
    // console.log(toSplit, toGive);
    
    if (toGive <= toSplit) {
      i++;
      toSplit -= toGive;
    } else {
      toGive -= toSplit;
      toSplit = 0;
      j++;
    }
    trans++;
  }
  console.log(i, j);
  
  splitAndMinimize(spent.slice(i, -j), avg, trans);

  // [6,12,12] avg: 10... to split:2 , toGive: 4
}

console.log(splitAndMinimize([6, 12, 12]));


