"use strict"; // TAGS: Fast & Slow Pointers

/*
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

  EX:
    n = 23 → happyNumber(n) = true (23 is a happy number)  
    EXPLANATION -- 2^2 + 3^2 = 4 + 9 = 13 → 1^2 + 3^2 = 1 + 9 = 10 → 1^2 + 0^2 = 1 + 0 = 1
*/

/*
SOLUTION #1
n = input number
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const happyNumber = (n, allSums = {}) => {
  let digits = String(n).split("");
  let sum = digits.reduce((total, digit) => {
    total += +digit * +digit;
    return total;
  }, 0);
  if (allSums[sum]) return false;
  else allSums[sum] = true;
  return sum === 1 ? true : happyNumber(sum, allSums);
};


/*
SOLUTION #2
n = input number
+ RUNTIME Complexity: O() [WST]
+ SPACE Complexity: O() [WST]
NOTE:
*/

const happyNumberV2 = n => {
  let slow = n, fast = n;
  while (true) {
    slow = sumOfSquaredDigits(slow);
    fast = sumOfSquaredDigits(sumOfSquaredDigits(fast));
    if (slow === fast) break;
  }
  if (slow === 1) return true;
  else return false;

  function sumOfSquaredDigits(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += (digit * digit);
      n = Math.floor(n / 10);
    }
    return sum;
  }
};

// TESTING:
console.log(happyNumberV2(23)); // Expect: true (happy number)
console.log(happyNumberV2(12)); // Expect: false (NOT happy number)


