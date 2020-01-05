import { TreeNode, Solution2 } from "./binary-tree-level-order-traversal"

/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

describe('unique pths with obstacle', () => {
        it("1", () => {
                const s = new Solution2()
                const node: TreeNode = {
                        val: 3,
                        left: {
                                val: 9,
                                left: null,
                                right: null
                        },
                        right: {
                                val: 20,
                                left: {
                                        val: 15,
                                        right: null,
                                        left: null
                                },
                                right: {
                                        val: 7,
                                        right: null,
                                        left: null
                                } 
                        }

                }
                const res = s.levelOrder(node)
                expect(res).toEqual(
                        [
                                [3],
                                [9,20],
                                [15,7]
                              ]
                )
        })
})
