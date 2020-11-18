"use strict";

/* PART #1:
You are given an array of arrays called a 'jBook'. The subarrays in a jBook are first names and phone numbers. jBooks are not always sorted...

Example:
  jBook = [
    ['alex','301-844-3421'],
    ['jae','301-844-1211'],
    ['david','301-844-0978'],
    ['travis','301-844-8505']
    ['jasmine','1800-974-4539'],
  ];

Develop a function that takes in a jBook and a name, searches through the jBook and returns the person's phone number. If the person does not exists, return false.

How efficient can you make this?

PART #2:

Why are we storing names and phone numbers in an array?

Develop a function that takes in the poorly constructed jBook and returns a proper phonebook complete with methods to add new names and look up and remove existing entries. */


/*
PART #1: findName
n = # of elements/entries in array/phonebook
+ RUNTIME Complexity: O(n) [WST]
+ SPACE Complexity: O(1) [WST]
*/

// returns the number associated with the name in the jBook
const findName = (jBook, name) => {
  for (let i = 0; i < jBook.length; i++) {
    if (jBook[i][0] === name) return jBook[i][1];
  }
  return 'no such name exists in the jBook!';
}

/*
PART #2: findEntry
n = # of elements/entries in array/phonebook
+ RUNTIME Complexity: O(1) [WST]
+ SPACE Complexity: O(1) [WST]
*/

// returns an object literal representing the jBook
const makePhoneBookObject = jBook => {

  const newBook = jBook
    .reduce((newBook, entry) => {
    newBook[entry[0]] = entry[1];
    return newBook;
    }, {});

  const findEntry = name => newBook[name] ? newBook[name] : 'entry DNE!';

  const addEntry = (name, number) => newBook[name] = number;

  const removeEntry = name => {
    if (newBook[name]) {
      let num = newBook[name];
      delete newBook[name];
      return `${name}'s # deleted: ${num}`;
    }
    else return 'no such name exists!'
  };

  return {
    'entries': newBook,
    findEntry,
    addEntry,
    removeEntry
  };
}


// TESTING:
const jBook = [
  ['TJ','301-844-3421'],
  ['Max','301-844-1211'],
  ['JD','206-819-6144'],
  ['Alex','301-844-8505'],
  ['Jazzy','1800-974-4539'],
];

const newBookObj = makePhoneBookObject(jBook);
console.log(newBookObj.findEntry('JD')); // -> 206-819-6144
newBookObj.addEntry('BJ', '206-813-2463');
console.log(newBookObj.findEntry('BJ')); // -> 206-813-2463
console.log(newBookObj.removeEntry('JD')); // -> JD's # deleted: 206-819-6144
console.log(newBookObj.findEntry('JD')); // -> entry DNE!
console.log(newBookObj.removeEntry('JD')); // -> no such name exists!
console.log(newBookObj.entries); /* ->
{ TJ: '301-844-3421',
  Max: '301-844-1211',
  Alex: '301-844-8505',
  Jazzy: '1800-974-4539',
  BJ: '206-813-2463'
} */
