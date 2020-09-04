const runningSum = function(nums) {
  const result = [];
  let summ = 0;
  for (let i = 0; i < nums.length; i++) {
      result.push(nums[i] + summ)
      summ += nums[i]
  }
  return result;
};