var letterCasePermutation = function(s) {
  let permutations = [];
  
  function permute(tempList = []) {
    if (tempList.length === s.length) {
      console.log(tempList);
      permutations.push(tempList);
    }
    else {
      for (let i = 0; i < s.length; i++) {
        let el = s.charAt(i);
        if (tempList[tempList.length - 1] === el) continue;
        if (/[a-z]/.test(el)) el = el.toUpperCase();
        else if (/[A-Z]/.test(el)) el = el.toLowerCase();
        tempList.push(el);
        permute(tempList);
        tempList.pop();
      }
    }
  }
  permute();
  return permutations;
};

console.log(letterCasePermutation("a1b2"));