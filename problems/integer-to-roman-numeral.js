"use strict"; // TAGS: Greedy

/*
Given a positive integer, return it as a string in Roman Numeral form.
*/

/*
n: # of characters in numbers/numerals array
RUNTIME Complexity: O(1) [WST] -- scales with size of input value/number (but our upper range is 3999)
SPACE Complexity: O(1) [BST/WST]
*/

const integerToRomanNumeral = n => {
  let num = n;
  let numerals = {
    "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV":4, "I": 1
  };
  return Object.keys(numerals).reduce((total, roman) => {
    while (num - numerals[roman] >= 0) {
      num -= numerals[roman];
      total += roman;
    }
    return total;
  }, "");
};

// TESTING:
console.log(integerToRomanNumeral(1994)); // Expect: "MCMXCIV"


