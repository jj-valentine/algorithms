// break string into array --> set (unique chars)
// parse string and check if index of indexOf === lastIndexOf for each unique letter

const firstNotRepeatingCharacter = str => {
  let chars = new Set(str.split('')); 
  let charsArr = [...chars];
  for (let i = 0; i < charsArr.length; i++) {
      let char = charsArr[i];
      if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return '_';   
}

