import unittest
from solution import Solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        solution = Solution()
        result =solution.buildTree([1,2], [2,1])
        print("RESULT!",result)
    



if __name__ == '__main__':
    unittest.main()
