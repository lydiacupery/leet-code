export class Solution {

public static minPathSum(grid: number[][]) {
        const GRID_LENGTH = grid.length
        const GRID_WIDTH = grid[0] ? grid[0].length : 0
       
      
        for(let j = 0; j < GRID_LENGTH; j++){
                for(let i = 0; i< GRID_WIDTH; i++){
                        // first row
                        if (j===0 && i!==0){
                                grid[j][i] = (grid[j][i-1] + grid[j][i])
                        }
                        //first column
                        else if(i===0 && j!==0){
                                grid[j][i] = grid[j-1][i] + grid[j][i]
                        } 
                        else if (i!==0 && j!==0) {
                                grid[j][i] = grid[j][i] + Math.min(grid[j-1][i], grid[j][i-1])
                        }
                }
        }
        return grid[GRID_LENGTH - 1][GRID_WIDTH - 1]
}

}
