from collections import deque

# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
    def __str__(self):
      toReturn = ''
      stack = [self]
      while(len(stack) > 0):
        curr = stack.pop()
        toReturn = toReturn + " .. " + str(curr.val)
        if(curr.right is not None):
          stack.append(curr.right)
        if(curr.left is not None):
          stack.append(curr.left)

      return toReturn

class Solution(object):
    def buildTree(self, preorder, inorder):
      preorder = deque(preorder)
      return self.buildTreeHelper(inorder,preorder)

    def buildTreeHelper(self, inorder, preorder):
      if(len(inorder) > 0):
        popped = preorder.popleft()
        inorderIndex = inorder.index(popped)
        node = TreeNode(inorder[inorderIndex])
        node.left = self.buildTreeHelper(inorder[0:inorderIndex], preorder)
        node.right = self.buildTreeHelper(inorder[inorderIndex+1:],preorder)
        return node
      return None
    


