/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  s.split('');
  const result = [];
  for (let i=0; i < s.length; i++) {
      result[indices[i]] = s[i]
  }
  return result.join('');
};