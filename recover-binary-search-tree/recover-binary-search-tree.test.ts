import { Solution, TreeNode } from "./recover-binary-search-tree"

/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
*/

describe('creates binary tree out of preorder and inorder', () => {
        it("1", () => {
               const root: TreeNode = {
                 val: 1,
                 right: null,
                 left: {
                   val: 3,
                   left: null,
                   right: {
                     val: 2,
                     left: null,
                     right: null
                   }
                 }
               }
               const s = new Solution()
               s.recoverTree(root)
               
               // expect tree to be mutated

               expect(root.val).toEqual(3)
               expect(root.left!.val).toEqual(1)
               expect(root.left!.right!.val).toEqual(2)
        }),
        it("2", () => {
               const root: TreeNode = {
                 val: 3,
                 right:{
                     val: 4,
                     left: {
                       val: 2,
                       left: null,
                       right: null
                     },
                     right: null
                   },
                 left: {
                   val: 1,
                   left: null,
                   right: null
                 }
               }
               const s = new Solution()
               s.recoverTree(root)

               expect(root.val).toEqual(2)
               expect(root.right!.left!.val).toEqual(3)

        }),
       it("3", () => {
          const root: TreeNode = {
            val: 2,
            right: {
              val: 1,
              left: null,
              right: null
            },
            left: {
              val: 3,
              left: null,
              right: null
            }
          }

          const s = new Solution()
          s.recoverTree(root)

          expect(root.val).toEqual(2)
          expect(root.right!.val).toEqual(3)
          expect(root.left!.val).toEqual(1)
        })
})
