import unittest
import solution

class TestStringMethods(unittest.TestCase):

    def test(self):
        result =solution.numIslands([
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"],
        ])
        self.assertEqual(result, 1)
    
    def test2(self):
        result =solution.numIslands([["1","1","1","1","1","1","1"]])
        self.assertEqual(result, 1)


if __name__ == '__main__':
    unittest.main()
