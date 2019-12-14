export class Solution {
  public buildTree(preOrder: number[], inOrder: number[]): TreeNode | null {
    // create the inorder map
    const inOrderValueToIndex = new Map()
    inOrder.forEach((v, i) => {
      inOrderValueToIndex.set(v, i)
    })
    return this.buildTreeHelper(
      preOrder,
      0,
      inOrder.length,
      inOrderValueToIndex
    )
  }

  public buildTreeHelper(
    preOrder: number[],
    inOrderStart: number,
    inOrderStop: number,
    inOrderToValueIndex: Map<number, number>
  ) {
    if (preOrder.length === 0) {
      return null
    }
    const root = preOrder[0]!

    const node = new TreeNode(root)

    // find root in inorder
    const rootIndex = inOrderToValueIndex.get(root)
    if (rootIndex === undefined) {
      return null
    }

    const leftInOrderLength = rootIndex - inOrderStart

    const leftPreOrder = preOrder.slice(1, leftInOrderLength + 1)
    const rightPreOrder = preOrder.slice(
      leftInOrderLength + 1,
      preOrder.length
    )

    node.left = this.buildTreeHelper(
      leftPreOrder,
      inOrderStart,
      rootIndex,
      inOrderToValueIndex
    )
    node.right = this.buildTreeHelper(
      rightPreOrder,
      rootIndex + 1,
      inOrderStop,
      inOrderToValueIndex
    )

    return node
  }
}

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(x: number) {
    this.val = x
  }
}
