import { Solution } from "./unique-paths"

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

describe('unique pths with obstacle', () => {
        it("1", () => {
        

        const res = Solution.uniquePathsWithObstacles([
                [0,0,0],
                [0,1,0],
                [0,0,0]
              ])
        expect(res).toEqual(2)

        })
})
