import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.maxRegion([
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [1, 0, 0, 0]
        ]), 5)
        # self.assertEqual(sol.find132pattern([5, 2, 3, 4]), False)
    



if __name__ == '__main__':
    unittest.main()
