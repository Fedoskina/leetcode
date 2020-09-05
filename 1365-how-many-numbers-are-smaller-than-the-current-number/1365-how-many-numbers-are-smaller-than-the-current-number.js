const smallerNumbersThanCurrent = function(nums) {
// solution one
  // const result = [];
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //       if(nums[i] > nums[j]) {
  //         count++  
  //       }
  //   }    
  //     result.push(count)
  //     count = 0
  // }
  // return result;
    
// solution two
  const occ = [];
  for (let i = 0; i < nums.length; i++) {
      occ[nums[i]] = occ[nums[i]] ? occ[nums[i]] + 1 : 1;
  }
  const runsum = [0];
  for (let i = 1; i < occ.length; i++) {
      runsum[i] = runsum[i - 1] + (occ[i - 1] || 0)
  }
  return nums.map(num => runsum[num])
};
