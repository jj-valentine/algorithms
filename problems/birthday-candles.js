"use strict";

const birthdayCandles = candlesArr => {
  for (let i = 0; i < candlesArr.length; i++) {
    candles[candlesArr[i]] = (candles[candlesArr[i]] || 0) + 1;
  }
  return Object.keys(candles)
    .reduce((max, key) => {
      if (candles[key] > max) max = candles[key];
      return max;
    }, Math.max());
}

function birthdayCandlesV2(arr) {
  const maxCandleHeight = Math.max(...arr);
  return arr.filter(candle => {
    return candle === maxCandleHeight;
  }).length;
}
a
const stairs = n => {
  let spaces = ' '.repeat(n);
  let steps = '';
  for (let i = 0; i < n; i++) {
    // remove a space 
    spaces = spaces.slice(0, -1);  
    // add a stair 
    steps += '#'
    console.log(spaces + steps);
  }
}
 