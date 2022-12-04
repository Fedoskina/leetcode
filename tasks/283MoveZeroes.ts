// https://leetcode.com/problems/move-zeroes/submissions/

const moveZeroes = (nums: number[]):number[] => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[index] = nums[i];
        nums[i] = index === i ? nums[i] : 0;
        index++
    }
  }

  return nums;
};