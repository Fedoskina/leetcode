// https://leetcode.com/problems/interval-list-intersections/

const intervalIntersection = (firstList: number[][], secondList: number[][]): number[][] => {
  let Ai = 0;
  let Bi = 0;
  const result: number[][] = [];
  
  while (Ai < firstList.length && Bi < secondList.length) {
      let maxStart = Math.max(firstList[Ai][0], secondList[Bi][0]);
      let minEnd = Math.min(firstList[Ai][1], secondList[Bi][1])
      
      if (maxStart <= minEnd) {
          result.push([maxStart, minEnd])
      }

      firstList[Ai][1] < secondList[Bi][1] ? Ai++ : Bi++   
  }
  
  return result;
};