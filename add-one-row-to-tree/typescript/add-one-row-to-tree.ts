export function addOneRow(root: TreeNode, v: number, d: number) {
  let childNodes = [root];
  let depth = 1;

  while (true) {
    if (d === 1) {
      const newNode = new TreeNode(v);
      newNode.left = childNodes[0];
      newNode.right = null;
      return newNode;
    }
    if (depth === d - 1) {
      for (const childNode of childNodes) {
        if (childNode) {
          const originalLeft = childNode.left;
          const originalRight = childNode.right;
          const newLeft = new TreeNode(v);
          newLeft.left = originalLeft;
          newLeft.right = null;
          childNode.left = newLeft;
          const newRight = new TreeNode(v);
          newRight.right = originalRight;
          newRight.left = null;
          childNode.right = newRight;
        }
      }
      return root;
    }
    let newChildNodes = [];
    for (const childNode of childNodes) {
      if (childNode.left) {
        newChildNodes.push(childNode.left);
      }
      if (childNode.right) {
        newChildNodes.push(childNode.right);
      }
    }
    childNodes = newChildNodes;
    depth += 1;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(x: number) {
    this.val = x;
  }
}
