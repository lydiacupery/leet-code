import unittest
from solution import checkBST 

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.find132pattern([5, 2, 3, 4]), False)
    
    def test2(self):
        sol = Solution()
        self.assertEqual(sol.find132pattern([3, 1, 4, 2]), True)



if __name__ == '__main__':
    unittest.main()
