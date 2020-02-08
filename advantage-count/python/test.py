import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.advantageCount([2,7,11,15], [1,10,4,11]), [2,11,7,15])

    def test2(self):
        sol = Solution()
        self.assertEqual(sol.advantageCount([12,24,8,32], [13,25,32,11]), [24,32,8,12])




if __name__ == '__main__':
    unittest.main()
