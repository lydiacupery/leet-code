import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.findAllDistances(4, [
            [1, 2],
            [1, 3]
        ], 1), [6, 6, -1])
        # self.assertEqual(sol.find132pattern([5, 2, 3, 4]), False)
    
    def test2(self):
        sol = Solution()
        self.assertEqual(sol.findAllDistances(6, [
            [1,2],
            [2,3],
            [3,4],
            [1, 5]
        ], 1), [6, 12, 18, 6, -1])

    



if __name__ == '__main__':
    unittest.main()
