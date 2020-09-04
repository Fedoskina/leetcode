const kidsWithCandies = function(candies, extraCandies) {
  let greatestNumber = candies[0];
  const result = [];
  for (const candy of candies) {
     greatestNumber = greatestNumber > candy ?  greatestNumber : candy;
  }
  for (const candy of candies) {
      const newNumber = candy + extraCandies;
      newNumber >= greatestNumber ? result.push(true) : result.push(false);
  }
  return result;
};