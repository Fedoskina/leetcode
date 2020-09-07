/**
 * @param {string} s
 * @return {number}
 */

const balancedStringSplit = function(s) {
  let R = 0;
  let L = 0;
  let result = 0
  
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'R') {
          R++
      } else {
          L++
      }
      
      if(R == L) {
          result++
      }
  }
  
  return result
};