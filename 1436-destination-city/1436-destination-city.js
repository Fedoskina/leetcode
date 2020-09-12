/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const dest = new Set();
  for (const [, to] of paths) {
      dest.add(to)
  }
  
  for (const [from] of paths) {
      dest.delete(from)
  }
  
  return [...dest].pop();
};