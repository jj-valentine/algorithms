const firstDuplicate = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) return arr[i];
      obj[arr[i]] = true;
  }
  return -1;
}

// 1st ATTEMPT: SUPER LONG STUPID WAY OF DOING THIS (Was originally solving for the smallest index of EITHER of the two integers in a duplicate pair)
// const firstDuplicateLong = arr => {
//   let cache = {};
//   let smallestIdx = Math.min();
//   arr.forEach((el, i) => {
//       if (cache[el] && cache[el][0] === 1) {
//         cache[el] = [cache[el][0] + 1, i];
//       } else if (!cache[el]) cache[el] = [1, i];
//   });
//   Object.keys(cache).forEach(key => {
//       if (cache[key][0] > 1 && cache[key][1] < smallestIdx) {
//         smallestIdx = cache[key][1];
//       }
//   });
//   return smallestIdx === Math.min() ? -1 : arr[smallestIdx];  
// }
