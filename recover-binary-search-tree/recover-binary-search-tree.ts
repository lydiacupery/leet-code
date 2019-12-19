export class Solution {
  public recoverTree(root: TreeNode | null ) {

    // create node variables n1 n2
    let n1: TreeNode | null = null
    let n2: TreeNode | null = null

    const stack = []

    let lastRoot: TreeNode | null = null;

    // while stack is not empty
    while(stack.length > 0 || n1===null || root !==null){
      while(root){
        stack.push(root)
        root = root.left
      }

      const node = stack.pop()!

      // logic

      if(lastRoot !== null && lastRoot!.val > node.val){ // last root val shoudl always be smaller, if it's bigger, something is up
        if(n1 === null){
          n1 = lastRoot;
        n2 = node
        }
      }

      lastRoot = node;

      root = node.right;


    }

    if(!n1 || !n2){
      throw new Error("should be 2 incorrectly placed nodes")
    }
    [n1.val, n2.val] = [n2.val, n1.val]
      
      
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
