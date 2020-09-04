const numJewelsInStones = function(J, S) {
  const occ = S.split('').reduce((res, current) => {
      res[current] = res[current] ? res[current] + 1 : 1
      return res;
  }, {})
  return J.split('').reduce((res, current) => {
      res += occ[current] ? occ[current] : 0
      return res
  }, 0)
};