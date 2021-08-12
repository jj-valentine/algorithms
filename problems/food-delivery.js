"use strict"; // TAGS: Backtracking, Recursion, Food, Delivery, Menu, Giftcard, Mock Interview: interviewing.IO (Ian Douglas), Difficulty: Medium

/*
Your food delivery startup wants to give out some gift cards to customers. You also want to know what kind of food they could order 
for each gift card amount so you can prepare food ahead of time.

  Part One:
    Find the first combination of food that adds up to the given gift card amount, then PRINT OUT only ONE combination 
    for that gift card, and move on to the next gift card amount
  
  Part Two:
    Refactor your first algorithm to examine MANY/ALL matching combinations for each gift card to find the 
    combination with the FEWEST TOTAL number of items purchased


  CONSTRAINTS/HINTS:
    + Customers must use 100% of their gift card value
    + Customers can buy ONE or MORE of any menu item
    + There are COMBINATIONS to be found for each test case

  EX:
    menu = { "toast": 2.20, "cheese": 1.25, "coffee": 1.40 }, giftCardAmounts = [5.00] → 
      prepareFoodDelivery(menu, giftCardAmounts) = ['coffee', 'coffee', 'toast'], ['cheese', 'cheese', 'cheese', 'cheese']
  
  NOTE: This problem is similar to "Coin Change #2" (LC: #518)
*/

/*
PART #1:
c = # of integers in input 'giftCards' array
m = # of key/value pairs in 'menuItems' object
+ RUNTIME Complexity: O(c * m^m) [WST]
+ SPACE Complexity: O(m) [WST]
NOTE: TASK -- Print out FIRST combo found for EACH giftcard
TODO: figure out TIME and SPACE complexity
*/

const prepareFoodDelivery = (menu, giftCards) => {
  let menuItems = Object.keys(menu);
  giftCards.forEach(cardAmount => {
    let foundCombo = backtrackToFindItemCombos(cardAmount, 0, []);
    if (foundCombo && foundCombo.length) console.log(foundCombo);
  });

  function backtrackToFindItemCombos(cashLeft, idx, combo) {
    if (cashLeft === 0) return combo;

    for (let i = idx; i < menuItems.length; i++) {
      let itemName = menuItems[i], itemCost = menu[itemName];
      if (cashLeft < itemCost) continue;
      combo.push(itemName);
      let foundCombo = backtrackToFindItemCombos(Math.round((cashLeft - itemCost) * 10) / 10, i, combo);
      if (foundCombo.length) return combo;
      combo.pop();
    }

    return [];
  }
}


/*
PART #2:
c = # of integers in input 'giftCards' array
n = # of key/value pairs in 'menuItems' object
+ RUNTIME Complexity: O(c * ) [WST]
+ SPACE Complexity: O() [WST]
NOTE: TASK -- Print out SMALLEST possible combo for EACH/EVERY giftcard
TODO: figure out TIME and SPACE complexity
*/

const prepareFoodDeliveryP2 = (menu, giftCards) => {
  let menuItems = Object.keys(menu);
  giftCards.forEach(cardAmount => {
    let minCombo = backtrackToFindItemCombos(cardAmount, 0, [], null);
    console.log(minCombo ? minCombo : "no combos found!") 
  });

  function backtrackToFindItemCombos(cashLeft, idx, combo, minCombo) {
    if (cashLeft === 0) return (minCombo === null || combo.length < minCombo.length) ?  combo : minCombo;

    for (let i = idx; i < menuItems.length; i++) {
      let itemName = menuItems[i], itemCost = menu[itemName];
      if (cashLeft < itemCost) continue;
      combo.push(itemName);
      let foundSmallerCombo = false;
      if (minCombo === null || combo.length < minCombo.length) {
        foundSmallerCombo = backtrackToFindItemCombos(Math.round((cashLeft - itemCost) * 100) / 100, i, combo, minCombo);
      }
      
      if (foundSmallerCombo) minCombo = [...foundSmallerCombo];
      combo.pop();
    }

    return minCombo;
  }
}


/*
PART #3:
c = # of integers in input 'giftCards' array
n = # of key/value pairs in 'menuItems' object
+ RUNTIME Complexity: O(c * ) [WST]
+ SPACE Complexity: O() [WST]
NOTE: TASK -- Print out ALL combos for EACH gift card
TODO: figure out TIME and SPACE complexity
*/

const prepareFoodDeliveryAll = (menu, giftCards) => {
  let menuItems = Object.keys(menu);
  giftCards.forEach(cardAmount => {
    backtrackToFindItemCombos(cardAmount, 0, []);
  });

  function backtrackToFindItemCombos(cashLeft, idx, combo) {
    if (cashLeft === 0) console.log(combo);

    for (let i = idx; i < menuItems.length; i++) {
      let itemName = menuItems[i], itemCost = menu[itemName];
      if (cashLeft < itemCost) continue;
      combo.push(itemName);
      backtrackToFindItemCombos(Math.round((cashLeft - itemCost) * 100) / 100, i, combo);
      combo.pop();
    }
  }
}

// TESTING:
const menu = {
  "sandwich": 6.85,
  "cheese": 1.25,
  "toast": 2.2,
  "curry": 7.85,
  "egg": 3.20,
  "coffee": 1.4,
  "soup": 3.45,
  "soda": 2.05
};

const giftCardAmounts = [5.00,/* 14.00, 19.00, 25.00, 33.00, 45.00, 49.00, 99.00, 114.00, 199.00 */];
prepareFoodDeliveryP2(menu, giftCardAmounts);