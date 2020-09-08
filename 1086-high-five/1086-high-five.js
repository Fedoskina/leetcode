/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const sum = (arr) => {
  return arr.reduce((result, current) => {
      return result + current;
  }, 0)
}

var highFive = function(items) {
  const result = [];
  items.sort((a,b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]
    }
    return b[1] - a[1]
  })

  const grouped = items.reduce((res, current) => {
    if (!res[current[0]]) {
        res[current[0]] = []    
    }
    res[current[0]].push(current[1])
    return res;
  }, {})

  for (const [id, scores] of Object.entries(grouped)) {
    const finalScore = sum(scores.slice(0, 5))/Math.min(5, scores.length)
    result.push([id, Math.floor(finalScore)])
  }

  return result
};