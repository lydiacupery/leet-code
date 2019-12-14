import { Solution } from "./search-in-rotated-sort-array"

/*
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
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
