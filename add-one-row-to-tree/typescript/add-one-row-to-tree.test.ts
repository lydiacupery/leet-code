import { addOneRow, TreeNode } from "./add-one-row-to-tree";

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

describe("creates binary tree out of preorder and inorder", () => {
  it("1", () => {
    const originalTree: TreeNode = {
      val: 4,
      right: {
        val: 6,
        left: {
          val: 5,
          right: null,
          left: null
        },
        right: null
      },
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 1,
          left: null,
          right: null
        }
      }
    };

    const tree = addOneRow(originalTree, 100, 2);
    console.log("result is", tree);
  });
});
