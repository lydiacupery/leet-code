from collections import deque

def numIslands(grid):
    height, width = len(grid), len(grid) and len(grid[0])

    def bfs(row, col):
      queue = deque([[row, col]])
      while(len(queue) > 0): 
        val = queue.popleft()
        i,j = val
        for y, x in ((i-1,j), (i+1, j), (i, j-1), (i, j+1)):
          if 0 <= y < height and 0 <= x < width and grid[y][x] == "1":
            grid[y][x] = '0'
            queue.append([y,x])

    count = 0
    for row in range(height):
      for col in range(width):
        if grid[row][col] == '1':
          count = count + 1
          bfs(row, col)
    return count

    


