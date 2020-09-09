/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  return A.map((element) => element*element).sort((a,b) => a - b)
};