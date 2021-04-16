"use strict"; 

/*
Given a roman numeral, convert it to an integer. It is guaranteed that the input string is a valid roman numeral 
in the range [1, 3999], and is no more than 15 characters in length

  EX's:
    str = "III" → romanNumeralToInteger(str) = 3

    str = "IX" → romanNumeralToInteger(str) = 9

    str = "LVIII" → romanNumeralToInteger(str) = 58

    str = "MCMXCIV" → romanNumeralToInteger(str) = 1994
*/

/*
n = # of characters in input string
+ RUNTIME Complexity: O(15) → O(1) [WST]
+ SPACE Complexity: O(1) [WST]
*/

const romanNumeralToInteger = str => {
  let numerals = {
    "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV":4, "I": 1
  };
  let total = 0;
  if (str.length <= 1) return numerals[str] || total;
  for (let i = 0; i < str.length; i++) {
    let roman = str[i];
    if (i !== str.length - 1 && numerals[str[i]] < numerals[str[i + 1]]) roman += str[++i];
    total += numerals[roman];
  }
  return total;
};

// TESTING:
console.log(romanNumeralToInteger("III")); // Expect: 3
console.log(romanNumeralToInteger("IX")); // Expect: 9
console.log(romanNumeralToInteger("LVIII")); // Expect: 58
console.log(romanNumeralToInteger("MCMXCIV")); // Expect: 1994
