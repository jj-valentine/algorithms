/*
Given a positive integer, return it as a string in Roman Numeral form.
  EX's:
    1     →    I
    4     →    IV
    5     →    V
    9     →    IX
    10    →    X
    40    →    XL
    50    →    L
    90    →    XC
    100   →    C
    400   →    CD
    500   →    D
    900   →    CM
    1000  →    M
*/

/*
n: # of characters in numbers/numerals array
RUNTIME Complexity: O(n * ) -- scales with size of input value/number
SPACE Complexity: O(1) [BST/WST]
NOTE:
*/

const toRomanNumeral = value => {
  let total = value;
  const numerals = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
  ];
  const numbers = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];
  return numbers.reduce((str, num, i) => {
    while (total - num >= 0) {
      total -= num;
      str += numerals[i];
    }
    return str;
  }, '');
}

// TESTING:
console.log(toRomanNumeral(1303));
