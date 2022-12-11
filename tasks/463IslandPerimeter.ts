var islandPerimeter = (grid: number[][]): number => {
  let result = 0;
  grid.forEach((row, i) => {
      row.forEach((column, j) => {
          let left = grid[i]?.[j - 1] || 0;
          let right = grid[i]?.[j+1] || 0;
          let top = grid[i - 1]?.[j] || 0;
          let bottom = grid[i + 1]?.[j] || 0;

          if (column) {
              result += 4 - left - right - top - bottom;
          }
      })
  })

  return result;
};