"use strict";

/*
Write a function that reverses characters in (possibly nested) parentheses in the input string. 
Input strings will always be well-formed with matching ()s.

  CONSTRAINTS:
    0 ≤ inputString.length ≤ 50

  EX:

    inputString = "(bar)" → reverseInParentheses(inputString) = "rab"
    inputString = "foo(bar)baz" → reverseInParentheses(inputString) = "foorabbaz"
    inputString = "foo(bar)baz(blim)" → reverseInParentheses(inputString) = "foorabbazmilb"
    inputString = "foo(bar(baz))blim" → reverseInParentheses(inputString) = "foobazrabblim"
    
    Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
    
    
*/    
    
const reverseInParentheses = str => {
  let arr = str.split(''), open = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(') open.push(i);
      else if (arr[i] === ')') {
          let start = open.pop();
          let revSub = arr.slice(start + 1, i).reverse();          
          arr.splice(start, i - start + 1, ...revSub);
          i -= 2;          
      }
  }
  return arr.join('');
}

// console.log(reverseInParentheses("(bar)"));
// console.log(reverseInParentheses("foo(bar)baz"));
console.log(JSON.stringify(reverseInParentheses("foo(bar)baz(blim)"))); // foorabbazmilb
console.log(JSON.stringify(reverseInParentheses("foo(bar(baz))blim"))); // "foobazrabblim"

