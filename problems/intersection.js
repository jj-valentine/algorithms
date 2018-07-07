'use strict';

/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce! */

// 2 Arrays
const intersectionTwo = (a1, a2) => {
  let b;
  if (a2.length < a1.length) b = a1, a1 = a2, a2 = b;
  return a1.filter(el => a2.indexOf(el) > -1);
}

const intersectionTwo2 = (a1, a2) => {
  // remove duplicates with a Set
  a1 = new Set(a1), a2 = new Set(a2);
  return [
    ...new Set([...a1].filter(el => a2.has(el)))
  ];
}

// this solution only works if input arrays are duplicate-free
const intersection = arrayOfArrays => {
  let cache = {};
	arrayOfArrays.forEach(arr => {
  	for (let i = 0; i < arr.length; i++) {
  		if (cache[arr[i]] === undefined) {
        cache[arr[i]] = 1;
      } else {
        cache[arr[i]]++;
      }
  	}
  });
  let result = [];
  for (let num in cache) {
    if (cache[num] === arrayOfArrays.length) result.push(Number(num));
  }
  return result;
}

// Uncomment these to check your work!
var a1 = [5, 10, 15, 20];
var a2 = [15, 88, 1, 5, 7];
var a3 = [1, 10, 15, 5, 20];
// console.log(intersection([a1, a2, a3])); // should log: [5, 15]
console.log(intersectionTwo2(a1, a2))
