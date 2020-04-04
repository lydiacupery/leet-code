import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2), -1)
        # self.assertEqual(sol.find132pattern([5, 2, 3, 4]), False)
    



if __name__ == '__main__':
    unittest.main()
