/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  // first solution
  // for (let i = 0; i < s.length / 2; i++) {
  //     [s[s.length - i -1], s[i]] = [s[i], s[s.length - i -1]]
  // }
  
  //second solution
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
      [s[left], s[right]] = [s[right], s[left]]
      left++;
      right--;
  }
};