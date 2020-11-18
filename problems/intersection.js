"use strict";

/* Construct a function intersection that compares input arrays and returns a new array with elements found 
in all of the inputs. BONUS - Use reduce! */

// these solutions only work if input arrays are duplicate-free
const intersectionTwo = (a1, a2) => {
  let b;
  if (a2.length < a1.length) b = a1, a1 = a2, a2 = b;
  return a1.filter(el => a2.indexOf(el) > -1);
}

const intersectionTwoV2 = (a1, a2) => {
  // remove duplicates with a Set
  a1 = new Set(a1), a2 = new Set(a2);
  return [
    ...new Set([...a1].filter(el => a2.has(el)))
  ];
}

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


const intersect = (a1, a2) => {
  if (a1.length < a2.length) {
    return intersect(a2, a1);
  }
  let lib = {}, intersection = [];
  for (let i = 0; i < a1.length; i++) {
    lib[a1[i]] = (lib[a1[i]] || 0) + 1;
  }
  for (let i = 0; i < a2.length; i++) {
    if (lib[a2[i]] && lib[a2[i]] > 0) {
      lib[a2[i]] = lib[a2[i]] - 1;
      intersection.push(a2[i]);
    }
  }
  return intersection;
}

// Uncomment these to check your work!
var a1 = [5, 10, 15, 20, 5];
var a2 = [15, 88, 1, 5, 7, 6, 5];
var a3 = [1, 10, 15, 5, 20];
// console.log(intersection([a1, a2, a3])); // should log: [5, 15]
// console.log(intersectionTwo(a1, a2));
// console.log(intersect(a1, a2))


console.log(JSON.stringify(plusOne([9, 9, 9])))