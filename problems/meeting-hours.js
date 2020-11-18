"use strict";

/*
Given a list of meetings objects, and an integer representing the number of hours in your day:
  1. Write a function that optimizes the number of meetings you can fit into your day, returning the given list of meetings
  2. Write a function that optimizes the number of hours in your day, returning the list of meetings

  EX:
    listOfMeetings = [{ name: 'Meeting1', hours: 3}, { name: 'Meeting2', hours: 5}]
*/

const optimizeMeetings = (meetings, haveHours) => {
  // sort meeting objects in ascending order
  let sortedMeetings = meetings.sort((m1, m2) => {
    if (m1.hours === m2.hours) return 0;
    return m1.hours > m2.hours ? 1 : -1;
  });
  let possibleMeetings = [];
  let totalHours = haveHours;
  // iterate through meetings array
  for (let i = 0; i < sortedMeetings.length; i++) {
    // check if the given meeting's duration will fit into your day
    if (totalHours - sortedMeetings[i].hours >= 0) {
      totalHours -= sortedMeetings[i].hours;
      possibleMeetings.push(sortedMeetings[i]);
    } else {
      break;
    }
  }
      // if so, add the meeting to your possibleMeetings list
      // if not, you've reached your maximum number of possible meetings, so return list of meetings
  return possibleMeetings;
}

const optimizeHours = (meetings, haveHours) => {
  // this is a permutations problem:
  // want to find all possible combinations of meeting hours and then look for one that fits best within our day (who's total hours is closest to haveHours)
}

// TESTING:
let meetings = [{ hours: 5 }, { hours: 7 }, { hours: 2 }];
console.log(optimizeMeetings(meetings, 8));

const permutator = arr => {
  for (let i = 0; i < arr.length; i++) {

  }

}

// permutator([1, 2, 3]);
let arr = [1]
let curr = arr.splice(1, 1);
console.log(curr, arr);
