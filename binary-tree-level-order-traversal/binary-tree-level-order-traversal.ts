
export class Solution {
  private toReturn: number[][]
  public levelOrder(root: TreeNode) {
    this.toReturn = []
    this.levelOrderHelper([root])
    return this.toReturn;
  } 

  public levelOrderHelper(nodes: TreeNode[]){
    if(nodes.length === 0){
      return
    }
    this.toReturn.push(nodes.map(v => v.val))
    let tempArray: TreeNode[] = [];
    for(const node of nodes){
      if(node.left !== null){
        tempArray.push(node.left)
      }
      if(node.right !== null){
        tempArray.push(node.right)
      }
    }
    this.levelOrderHelper(tempArray)
  }
}

export class Solution2 {
  private toReturn: number[][]
  public levelOrder(root: TreeNode){
    this.toReturn = []
    this.levelOrderHelper(root, 0)
    return this.toReturn
  }
  public levelOrderHelper(root: TreeNode | null, level: number){
    if(root !== null){
      this.toReturn[level] !== undefined ? this.toReturn[level].push(root.val) : this.toReturn.push([root.val])
      this.levelOrderHelper(root.left, level + 1)
      this.levelOrderHelper(root.right, level + 1)
    }
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