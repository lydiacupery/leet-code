export class Solution {

  

  public static uniquePathsWithObstacles(obstacleGrid: number[][]){
  const OBSTACLE = 1

    const LENGTH = obstacleGrid.length
    const WIDTH = obstacleGrid[0] ? obstacleGrid[0].length : 0


   obstacleGrid.forEach((h, hi) => 
    {
       return h.forEach((_, wi) => {
         if(hi === 0 && wi === 0){
           obstacleGrid[hi][wi] = obstacleGrid[hi][wi] === OBSTACLE ? 0 : 1 
         }
         else if (hi === 0) {
           obstacleGrid[hi][wi] = (obstacleGrid[hi][wi] === OBSTACLE ? 0 : 1) *   (obstacleGrid[hi][wi -1])
         }
         else if(wi === 0){
           obstacleGrid[hi][wi] = (obstacleGrid[hi][wi] === OBSTACLE ? 0 : 1) *  (obstacleGrid[hi-1][wi])

         }
         else {
           obstacleGrid[hi][wi] = (obstacleGrid[hi - 1][wi] + obstacleGrid[hi][wi - 1]) * (obstacleGrid[hi][wi] === OBSTACLE ? 0 : 1)
         }
       })
     }
   )


   return obstacleGrid[LENGTH -1][WIDTH -1]
   
  }
}

