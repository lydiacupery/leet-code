class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
      for y, row in enumerate(obstacleGrid):
        for x, column in enumerate(row):
          if(obstacleGrid[y][x] == 1):
            obstacleGrid[y][x] = 0
          elif(x == 0 and y ==0):
            obstacleGrid[y][x] = 1
          elif(x == 0):
              obstacleGrid[y][x] = obstacleGrid[y-1][x]
          elif(y == 0):
              obstacleGrid[y][x] = obstacleGrid[y][x-1]
          else:
            obstacleGrid[y][x] = obstacleGrid[y][x-1] + obstacleGrid[y-1][x]
      height = len(obstacleGrid)
      width = len(obstacleGrid[0]) if obstacleGrid[0] else 0
      return obstacleGrid[height-1][width-1]

          



