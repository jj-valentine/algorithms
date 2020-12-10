"use strict";

/* 
You're given TWO huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 
that represents a number with exactly 4 digits. The represented number might have leading zeros. 
Your task is to add up these huge integers and return the result in the same format. 
  
  EXs:
    a = [9876, 5432, 1999], b = [1, 8001] → addTwoHugeNumbers(a, b) = [9876, 5434, 0]
    Because → 987654321999 + 18001 = 987654340000

    a = [123, 4, 5], b = [100, 100, 100] → addTwoHugeNumbers(a, b) = [223, 104, 105]
    Because → 12300040005 + 10001000100 = 22301040105
*/


function makeNumbersList(str, maxFirst) {
  let output = new Node(Number(str.slice(0, maxFirst)));
  let curr = output;
  for (let i = maxFirst; i < str.length;) {
    let s = "";
    for (var j = 0; j < 4; j++) {      
      if (str[i] !== "0") s += str[i];
      i++;
    }
    if (s.length === 0) s = "0";
    curr.next = new Node(Number(s));
    curr = curr.next;
  }
  return output;
}

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

function addTwoHugeNumbers(l1, l2) {
 
  function make4Digits(n) {
    if (n.length === 1) n = "000" + n;
    else if (n.length === 2) n = "00" + n;
    else if (n.length === 3) n = "0" + n;
    return n;
  } 
  
  let s1 = "", s2 = "";
  let len1 = 0, len2 = 0;
  if (l1) {
    s1 += l1.value;
    len1++;
  }
  if (l2) {
    s2 += l2.value;
    len2++;
  }
  l1 = l1.next, l2 = l2.next
  let maxFirst = Math.max(s1.length, s2.length);
  while (l1 || l2) {
    if (l1) {
      s1 += make4Digits(String(l1.value));
      l1 = l1.next;
      len1++;
    }

    if (l2) {
      s2 += make4Digits(String(l2.value));
      l2 = l2.next;
      len2++;
    }
  }

  return makeNumbersList(String(Number(s1) + Number(s2)), maxFirst);
}

// let l1 = new Node(9876, new Node(5432, new Node(1999)));
// let l2 = new Node(1, new Node(8001));
// console.log(addTwoHugeNumbers(l1, l2));
// let list1 = new Node(123, new Node(4, new Node(5)));
// let list2 = new Node(100, new Node(100, new Node(100)));
// console.log(addTwoHugeNumbers(list1, list2));

function strstr(s, x) {
  // loop through every character
  for (let i = 0; i < s.length; i++) {
    // if we find a character that matches the first character in sample string
    if (s[i] === x[0]) {
      // loop through number of characters in string that are in sample to test each one
      for (var j = 1; j < x.length; j++) {
        if (s[i + j] !== x[j]) break;
      }

      if (j === x.length) return i;
    }
  }
  return -1;
} 

// console.log(strstr("aaaaaaaaa", "aaaaaaaaaa"));

function textJustification(words, l) {
  let output = [];
  let nextLine = "";

  let lineTotal = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length + lineTotal < l) {
      nextLine += words[i];
      lineTotal += words[i].length;
      if (lineTotal + 1 <= l) {
        nextLine += " ";
        lineTotal++;
      }
    } else {    
      nextLine = nextLine.split(' ');
      if (nextLine.length % 2 !== 0) {
        // add spaces 
      }
      output.push(nextLine);
      nextLine = words[i];
      lineTotal = words[i].length;
    }
  }
  return output;
}

// console.log(textJustification(["This", "is", "an", "example", "of", "text", "justification."], 16));

function sumInRange(nums, queries) {
  let total = 0;
  const prefixSum = nums.map(n => total += n);
  let totalSum = queries.reduce((total, query) => {
    total += prefixSum[query[1]] - (prefixSum[query[0] - 1] || 0);
    return total;
  }, 0)
} 


// nums: [3, 0, -2, 6, -3, 2]
// queries:
// [[0,2], 
//  [2,5], 
//  [0,5]]

console.log(sumInRange([3, 0, -2, 6, -3, 2], 
  [[0,2], 
   [2,5], 
   [0,5]]
));
