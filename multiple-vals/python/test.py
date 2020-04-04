import unittest
from solution import UnionFindSolution

class TestStringMethods(unittest.TestCase):
    def test(self):
        sol = UnionFindSolution()
        print(sol)
        self.assertEqual(sol.findCircleNum([[1,1,0], [1,1,0], [0,0,1]]), 2)


if __name__ == '__main__':
    unittest.main()

