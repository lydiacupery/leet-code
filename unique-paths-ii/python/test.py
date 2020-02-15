import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.uniquePathsWithObstacles([[0,0,0],
  [0,1,0],
  [0,0,0]]), 2)
    



if __name__ == '__main__':
    unittest.main()
