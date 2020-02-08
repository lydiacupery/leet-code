class Solution:
    def minPathSum(self, grid):
      for vi, row in enumerate(grid):
        for hi, cell in enumerate(row):
          if vi == 0 and hi == 0:
            pass
          elif vi == 0: # first row
            grid[vi][hi] = grid[vi][hi] + grid[vi][hi-1]
          elif hi == 0:
            grid[vi][hi] = grid[vi][hi] + grid[vi-1][hi]
          else:
            grid[vi][hi] = grid[vi][hi] + min(grid[vi-1][hi], grid[vi][hi-1])
      width = (len(grid[0])-1) if grid[0] else 0
      return grid[len(grid)-1][width]