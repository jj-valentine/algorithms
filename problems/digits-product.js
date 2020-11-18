"use strict";

/* 
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose 
digits is equal to the given integer product. If there is no such integer, return -1 instead.

  EX's:
    product = 12 → digitsProduct(product) = 26;
    product = 19 → digitsProduct(product) = -1;
*/

const digitsProduct = product => {
  if (product === 0) return 10;
  if (product === 1) return 1;
  let str = "", prod = product;
  for (let i = 9; i > 1; i--) {
    while (prod % i === 0) {
        str = i + str;
        prod /= i;
    }
  }
  return prod > 1 ? -1 : Number(str);
}

// console.log(digitsProduct(576));
// console.log(digitsProduct(243));
// console.log(digitsProduct(450));