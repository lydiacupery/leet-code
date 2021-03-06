import { Solution } from "./search-in-rotated-sort-array"

/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

describe('creates binary tree out of preorder and inorder', () => {
        it("1", () => {
               const answer = Solution.searchInRotatedSortArray([4,5,6,7,0,1,2], 0)
               expect(answer).toEqual(4)
        })
        it("2", () => {
               const answer = Solution.searchInRotatedSortArray([4,5,6,7,0,1,2], 3)
               expect(answer).toEqual(-1)

        })
        it("3", () => {
               const answer = Solution.searchInRotatedSortArray([5,1,3] , 3)
               expect(answer).toEqual(2)

        })
        it("4", () => {
               const answer = Solution.searchInRotatedSortArray([3,1] , 1)
               expect(answer).toEqual(1)

        })
})
