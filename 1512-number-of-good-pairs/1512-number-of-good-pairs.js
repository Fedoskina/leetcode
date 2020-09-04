const numIdenticalPairs = function(nums) {
  const occ = nums.reduce((res, current) => {
      res[current] = res[current] ? res[current] + 1 : 1;
      return res;
  }, {});
  return Object.values(occ).reduce((res, current) => {
     res += current * (current - 1) / 2;
     return res; 
  }, 0)
};