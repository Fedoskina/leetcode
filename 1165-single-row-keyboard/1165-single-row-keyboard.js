/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

const calculateTime = function(keyboard, word) {
  let i = 0;
  let j = 0;
  let time = 0;
  for (const char of word ) {
      j = keyboard.indexOf(char);
      time += Math.abs(i - j)
      i = j;
  }  
  return time;
};