import { Solution } from "./01-matrix"

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

describe('01 matrix', () => {
        it("1", () => {
                const res = Solution.updateMatrix(
                        [[0,0,0],
                        [0,1,0],
                        [0,0,0]])
                expect(res).toEqual([[0,0,0],
                        [0,1,0],
                        [0,0,0]])
        })
        it("2", () => {
                const res = Solution.updateMatrix(
                        [[0,0,0],
                        [0,1,0],
                        [1,1,1]])
                expect(res).toEqual([[0,0,0],
                        [0,1,0],
                        [1,2,1]])
        })
        it("3", () => {
                const res = Solution.updateMatrix(
                        [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]])
                expect(res).toEqual([[0,1,0,1,2],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]])
        })
})
