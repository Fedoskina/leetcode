/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  const nums = []
  let result = 0;
  for (let i = 0; i < n; i++) {
      nums[i] = start + 2*i;
  }
  for (const num of nums) {
      result = result^num 
  }
  return result
};