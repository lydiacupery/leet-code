import { Solution } from "./binary-tree-from-preorder-to-inorder"

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
               const preOrder =  [3,9,20,15,7]
               const inOrder = [9,3,15,20,7]
               const s = new Solution()
               const tree = s.buildTree(preOrder, inOrder)
               console.log("tree is", tree)
        })
})
