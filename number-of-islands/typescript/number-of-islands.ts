export class Solution {

public static numIslands(grid: string[][]) {
        const length = grid.length
        const width = grid[0] ? grid[0].length : 0
        let count = 0

        // call the dfs function for each thing in grid
        for(let y = 0; y < length; y++){
                for(let x=0; x< width; x++){
                        if(grid[y][x] === "1"){
                                count++
                                dfs({x, y})
                        }
                }
        }

        return count

        function dfs(loc: {x: number, y: number}) {
                const {x,y} = loc

                if(x < 0 || y < 0 || x >= width || y >= length || grid[y][x] !== "1"){
                        return
                }

                //set the thing at loc
                grid[y][x] = "visited"

                dfs({x: x + 1, y})
                dfs({x: x - 1, y})
                dfs({x, y: y + 1})
                dfs({x, y: y -1})
        }

}

}
