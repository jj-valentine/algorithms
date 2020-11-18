"use strict";

/* 
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names,
the one which comes later will have an addition to its name in the form of '(k)', where 'k' is the smallest positive 
integer such that the obtained name hasn't been used yet. Return an array of the new names given to the files.

  EX:
    names = ["doc", "doc", "image", "doc(1)", "doc"] → 
      fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]
*/

const fileNaming = names => {
  return Object.keys(names.reduce((lib, name) => {
    let file = name;
    while (lib[file]) {
      file = `${name}(${lib[name]++})`
    } 
    lib[file] = true;
    return lib;
  }, {}));
};


console.log(JSON.stringify(fileNaming(["dd", "dd(1)", "dd(2)", "dd", "dd(1)", "dd(1)(2)", "dd(1)(1)", "dd", "dd(1)"]))); 
// ["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"]
