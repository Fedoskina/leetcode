const shuffle = function(nums, n) {
  const newArr = nums.slice(n);
  const result = [];
  for (let i = 0; i < nums.length - n; i++) {

    
      result.push(nums[i]);
      result.push(newArr[i])
  }
  return result;
};