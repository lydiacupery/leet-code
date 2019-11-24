import { ListNode, TreeNode, Solution2 } from "./sorted-list-to-bst"

/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

describe('converted sorted list to BST', () => {
        it("1", () => {
                const val1 = new ListNode(-10)
                val1.next = new ListNode(-3)
                val1.next.next = new ListNode(0)
                val1.next.next.next = new ListNode(5)
                val1.next.next.next.next = new ListNode(9)

                const s = new Solution2();

                const resultTreeNode = s.sortListToBST(val1)
                const resultNodeShouldBe: TreeNode =  {"left": {"left": null, "right": {"left": null, "right": null, "val": -3}, "val": -10}, "right": {"left": null, "right": {"left": null, "right": null, "val": 9}, "val": 5}, "val": 0}

                expect(resultTreeNode).toEqual(resultNodeShouldBe)
        })
})
