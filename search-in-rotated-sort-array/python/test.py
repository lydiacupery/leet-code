import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.search([4,5,6,7,0,1,2], 0), 4)

    def test2(self):
        sol = Solution()
        self.assertEqual(sol.search([[1, 3]], 0), -1)
    


if __name__ == '__main__':
    unittest.main()
