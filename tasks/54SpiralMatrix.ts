// https://leetcode.com/problems/spiral-matrix/description/

const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = []
  while(matrix.length){
    const first = matrix.shift()
    if (first) {
      result.push(...first)
    }

    for(const m of matrix){
      let val = m.pop()
      if(val)
        result.push(val)
        m.reverse()   
    }
    
    matrix.reverse()
  }
  return result
};