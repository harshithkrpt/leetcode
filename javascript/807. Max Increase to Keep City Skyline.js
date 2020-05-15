/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const maxTBArr = [];
  const maxLRArr = [];
  let sum = 0;
  // Find The Max For Each Row
  for (let i = 0; i < grid.length; i++) {
    let max = -1;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > max) {
        max = grid[i][j];
      }
    }

    maxTBArr[i] = max;
  }

  for (let i = 0; i < grid.length; i++) {
    let max = -1;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[j][i] > max) {
        max = grid[j][i];
      }
    }

    maxLRArr[i] = max;
  }
  const newSkyline = [];
  for (let i = 0; i < maxTBArr.length; i++) {
    newSkyline[i] = [];
    for (let j = 0; j < maxLRArr.length; j++) {
      if (maxTBArr[i] > maxLRArr[j]) {
        newSkyline[i][j] = maxLRArr[j];
      } else {
        newSkyline[i][j] = maxTBArr[i];
      }
      sum += Math.abs(grid[i][j] - newSkyline[i][j]);
    }
  }

  return sum;
};
