import unittest
from solution import Solution, TreeNode


class TestStringMethods(unittest.TestCase):

    def test(self):
        solution = Solution()
        tree_node = TreeNode(4)
        tree_node.left = TreeNode(2)

        tree_node.left.left = TreeNode(3)
        tree_node.left.right = TreeNode(1)
        result = solution.addOneRow(tree_node, 1, 3)
        print("RESULT!", result)


if __name__ == '__main__':
    unittest.main()
