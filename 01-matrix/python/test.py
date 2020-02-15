import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        sol = Solution()
        self.assertEqual(sol.updateMatrix([[0,0,0], [0,1,0], [0,0,0]]), 
        [ [0,0,0], [0,1,0], [0,0,0 ]])
    
    def test2(self):
        sol = Solution()
        self.assertEqual(sol.updateMatrix([[0,0,0], [0,1,0], [1,1,1]]), 
       [[0,0,0], [0,1,0], [1,2,1]] )



if __name__ == '__main__':
    unittest.main()
