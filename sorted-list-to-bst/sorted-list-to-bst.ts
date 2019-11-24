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


export class Solution2 {
  private head: ListNode | null

  public sortListToBST(head: ListNode | null){
    if(!head) return null
    this.head = head

    const length = this.getLenghtOfList(head)
    return this.createNodeAndUpdateHead(0, length -1) 

  }

  public createNodeAndUpdateHead(startIndex: number, endIndex: number): TreeNode | null{
    if(endIndex < startIndex || !this.head){
      return null
    }
    const mid = Math.floor((startIndex +endIndex)/2 )

    const leftNode = this.createNodeAndUpdateHead(startIndex, mid-1)

    const node = new TreeNode(this.head.val)
    node.left = leftNode
    this.head = this.head.next

    const rightNode = this.createNodeAndUpdateHead(mid+1, endIndex)
    node.right = rightNode

    return node
  }

  public getLenghtOfList(head: ListNode) {
    let length = 0
    let hPointer: ListNode | null = head
    while(hPointer){
      length ++ 
      hPointer = hPointer.next
    }
    return length;
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