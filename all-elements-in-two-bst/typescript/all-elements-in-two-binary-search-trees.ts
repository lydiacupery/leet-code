export class Solution {
  public getAllElements(root1: TreeNode, root2: TreeNode) {
    let nodeA: TreeNode | null = root1;
    let nodeB: TreeNode | null = root2;
    const nodesA: TreeNode[] = [];
    const nodesB: TreeNode[] = [];
    const toReturn: number[] = [];
    let count = 3;

    // starting, doing it with one
    while (nodeA || nodeB || nodesB.length > 0 || nodesA.length > 0) {
      count--;
      while (nodeA) {
        nodesA.push(nodeA);
        nodeA = nodeA.left;
      }

      console.log("node b", nodeB);

      while (nodeB) {
        nodesB.push(nodeB);
        nodeB = nodeB.left;
      }
      console.log({ nodesA, nodesB });

      // if there is no A or there is a B and B smaller, pop off from b
      if (
        nodesA.length === 0 ||
        (nodesB.length > 0 &&
          nodesB[nodesB.length - 1].val < nodesA[nodesA.length - 1].val)
      ) {
        while (nodeB === null && nodesB.length > 0) {
          nodeB = nodesB.pop()!;
        }

        if (nodeB !== null) {
          //visit
          toReturn.push(nodeB.val);
          nodeB = nodeB.right;
        }
      }

      // if A smaller, pop off from a
      else {
        while (nodeA === null && nodesA.length > 0) {
          nodeA = nodesA.pop()!;
        }

        if (nodeA != null) {
          //visit
          toReturn.push(nodeA.val);
          nodeA = nodeA.right;
        }
      }
    }

    return toReturn;
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
