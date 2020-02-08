import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.minPathSum([
            [1,3,1],
            [1,5,1],
            [4,2,1]
            ]), 7)



if __name__ == '__main__':
    unittest.main()
