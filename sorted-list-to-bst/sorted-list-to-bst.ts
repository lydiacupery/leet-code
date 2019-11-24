export class Solution {

  public static sortedListToBST(head: ListNode | null){
    const list = [];
    while(head){
      list.push(head.val)
      head = head.next
    }
    if(list.length<1){
      return null
    }

    const node = this.createNodeFromList(list)
    return node
    
  }

  public static createNodeFromList(list: number[]): TreeNode{
    const center = Math.floor(list.length / 2)
    const leftVals = list.slice(0, center )
    const rightVals = list.slice(center + 1, list.length)
    const node = new TreeNode(list[center])
    node.left = leftVals.length === 0 ? null : this.createNodeFromList(leftVals)
    node.right = rightVals.length === 0 ? null : this.createNodeFromList(rightVals)
    return node
  }
}

 export class ListNode {
      val: number;
      next: ListNode | null;
    constructor(x: number){
      this.val = x
    }
   }

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(x: number){
    this.val = x
  }
}