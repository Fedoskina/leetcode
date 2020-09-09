/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = function(nums) {
  let min = 0;
  let max = 0
  for (const num of nums) {
      if (num === 1) {
          min++
      } else {
          min = 0;    
      }
      max = Math.max(min, max);
  }
  
  return max;
};