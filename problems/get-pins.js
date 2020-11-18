"use strict";

/*
A keypad connected to a door you wish you enter has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

You previously observed someone pushing in a code, but its possible that each one of the digits you saw pressed could have been an "adjacent digit" instead. An adjacent digit is a digit directly surrounding a given digit (horizontally or vertically, but not diagonally). For example, a 1 could also mean a 2 or 4, and a 5 could also mean a 2, 4, 6 or 8.

The keypad is such that you can enter an unlimited amount of incorrect PINs without being locked out. In other words, you can try the observed PIN itself and all possible variations (considering the adjacent digits).

Write a function getPINs that accepts a string representing an observed PIN, and returns an array of all the possible combinations for that PIN (with a length of 1 to 8 digits). All combinations should be entered into the array as strings, to avoid problems with leading zeros.

EX's:
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}
*/

function getPINs(obs) {
  let adjs = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['0', '5', '7', '8', '9'],
    '9': ['6', '8', '9'],
    '0': ['0', '8']
  };
  let pins = [];
  for (let i = 0; i < adjs[obs.charAt(0)];  i++) {

    let combo = obs.charAt(i);
    for (let j = 0; j < adjs[obs.charAt(i)].length;  j++) {
      combo += adjs[obs.charAt(i)][j];
    }
    pins.push(combo)
  }
  return pins;
}

console.log(getPINs('11'));
