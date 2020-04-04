import { Solution, TreeNode } from "./all-elements-in-two-binary-search-trees";

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
    const n1: TreeNode = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    };
    const n2: TreeNode = {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    };
    const s = new Solution();
    const order = s.getAllElements(n1, n2);
    expect(order).toEqual([0, 1, 1, 2, 3, 4]);
  });
});
