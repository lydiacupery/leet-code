from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def getAllElements(self, root1, root2):
        node1 = root1
        node2 = roo2
        stack1 = []
        stack2 = []
        results = []
        while(node1 or node2 or len(stack1) > 0 or len(stack2) > 0):
            while(node1):
                stack1.append(node1)
                node1 = node1.left

            while(node2):
              stack2.append(node2)
              node2 = node2.left

            if(len(stack2) == 0 or (stack1 and stack1[len(stack1)1] < stack2[len(stack2) 1])):
                node1 = stack1.pop()
                results.append(node1)
                node1 = node1.right

            else:
                node2 = stack2.pop()
                results.append(node2)
                node2 = node2.right

            return results

