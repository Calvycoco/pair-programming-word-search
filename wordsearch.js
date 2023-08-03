const wordSearch = (letters, word) => {
 
  let arr = [];
  for (let col = 0; col < letters.length; col++) {
    let temp = [];
    for (let row = 0; row < letters.length; row++) {
      temp.push(letters[row][col]);
    }
    arr.push(temp);
  }
  
  let horizontal = hasWord(letters, word);
  let vertical = hasWord(arr, word);
  
  if (horizontal || vertical) {
    return true;
  }
  return false;
  
};
  
const hasWord = (arr, word) => {
  const join = arr.map(ls => ls.join(''));
  for (l of join) {
    if (l.includes(word)) return true;
  }
  return false;
};
  
module.exports = wordSearch;