import {Solution} from './minimum-path-sum'

/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

describe('min path sum', () => {
        it("1", () => {
        const result = Solution.minPathSum([[1, 3, 1], [1, 5,1], [4,2,1]])

        expect(result).toEqual(7)

        }),
        it("2", () => {
          const result = Solution.minPathSum([[1,2,5],[3,2,1]])
          expect(result).toEqual(6)
        }),
        it("3", () => {
          const result = Solution.minPathSum([[1,2],[5,6],[1,1]])
          expect(result).toEqual(8)
        })
})
