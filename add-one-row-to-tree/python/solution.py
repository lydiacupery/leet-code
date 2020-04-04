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
    def addOneRow(self, root, v, d):
        if(d == 1):
            rootNode = TreeNode(v)
            rootNode.left = root
            return rootNode

        layer_nodes = deque([root])
        for _ in range(d):
            level_node_len = len(layer_nodes)
            for _ in range(0, level_node_len):
                node = layer_nodes.popleft()
                if(node):
                    layer_nodes.append(node.left)
                    layer_nodes.append(node.right)

        # are at the right depth, just give each of the layer nodes the value as the child
        for node in layer_nodes:
            if node:
                node.left, node.left.left = TreeNode(v), node.left
                node.right, node.right.right = TreeNode(v), node.right
        return root
