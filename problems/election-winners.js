"use strict";

/* 
Elections are in progress! Given an array of the numbers of votes given to each of the candidates so far, 
and an integer 'k' equal to the number of voters who haven't cast their vote yet, find the number of candidates 
who still have a chance to win the election. The winner of the election must secure strictly more votes than 
any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no 
winner at all.

Example

For votes = [2, 3, 5, 2] and k = 3, the output should be
electionsWinners(votes, k) = 2. */
const electionWinners = (votes, k) => {
  let lib = {};
  let max = -Infinity;
  for (let i = 0; i < votes.length; i++) {
    lib[votes[i]] = (lib[votes[i]] + 1) || 1;
    if (votes[i] > max) max = votes[i];
  } 
  if (k === 0) 
  let winners = 0;
  for (let i = 0; i < votes.length; i++) {
    if (lib[votes[i] + k] || votes[i] + k > max) winners++;
  }
  return winners;
}