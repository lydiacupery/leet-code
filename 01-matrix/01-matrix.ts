/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

export class Solution {

  public static updateMatrix(matrix: number[][]) {

    const length = matrix.length
    const width = matrix[0] ? matrix[0].length : 0
    const maxSquares = length * width 

    matrix.forEach((vv, vi) => {
      vv.forEach((_, hi) => {
        const left = hi > 0 ? matrix[vi][hi-1] : maxSquares 
        const top = vi > 0 ? matrix[vi-1][hi] :maxSquares 
        matrix[vi][hi] = matrix[vi][hi] * (Math.min(left, top) + 1)
      })
    })


    matrix.forEach((vv, vi) => {
      vv.forEach((_, hi) => {
        const rvi = (length -1) - vi
        const rhi = (width -1) - hi
        const right = rhi < width - 1? matrix[rvi][rhi+1] : maxSquares
        const bottom = rvi < length - 1 ? matrix[rvi+1][rhi] : maxSquares
        matrix[rvi][rhi] = Math.min((Math.min(right, bottom) + 1), matrix[rvi][rhi])
      })
    })

    return matrix
  }

}
