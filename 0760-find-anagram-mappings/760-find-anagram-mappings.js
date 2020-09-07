/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

const anagramMappings = function(A, B) {
  return A.map(num => B.indexOf(num))
};