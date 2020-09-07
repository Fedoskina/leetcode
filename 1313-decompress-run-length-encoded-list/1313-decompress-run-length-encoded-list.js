/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length / 2; i++) {
      let [freq, val] = [nums[2*i], nums[2*i+1]]
      
      while(freq-- > 0) {
          result.push(val)
      }
  }
  return result;
};