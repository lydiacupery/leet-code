import {Solution} from './132-pattern'

/*
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/

describe('min path sum', () => {
        it("1", () => {
        const result = Solution.find132Pattern([1, 2, 3, 4])

        expect(result).toEqual(false)

        }),
        it("2", () => {
          const result = Solution.find132Pattern([3, 1, 4, 2])
          expect(result).toEqual(true)
        }),
        it("3", () => {
          const result = Solution.find132Pattern([-1, 3, 2, 0])
          expect(result).toEqual(true)
        })
        it("4", () => {
          const result = Solution.find132Pattern([1,0,1,-4,-3])
          expect(result).toEqual(false)
        })
})
