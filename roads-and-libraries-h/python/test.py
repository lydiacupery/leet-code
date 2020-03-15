import unittest
from solution import UnionFindSolution

class TestStringMethods(unittest.TestCase):
    # def test1(self):
    #     sol = UnionFindSolution()
    #     print(sol)
    #     self.assertEqual(sol.roadsAndLibraries(3, 2, 1, [
    #             [1, 2],
    #             [3, 1],
    #             [2, 3]
    #     ]), 4)
    # def test2(self):
    #     sol = UnionFindSolution()
    #     print(sol)
    #     self.assertEqual(sol.roadsAndLibraries(6, 2, 5, [
    #             [1, 3],
    #             [3, 4],
    #             [2, 4],
    #             [1, 2],
    #             [2, 3],
    #             [5, 6]
    #     ]), 12)
    # def test3(self):
    #     sol = UnionFindSolution()
    #     print(sol)
    #     self.assertEqual(sol.roadsAndLibraries(5, 6, 1, [
    #             [1, 2],
    #             [1, 3],
    #             [1, 4],
    #     ]), 15)
    def test4(self):
        sol = UnionFindSolution()
        print(sol)
        self.assertEqual(sol.roadsAndLibraries(9, 91, 84, [
                [8, 2],
                [2, 9],
        ]), 805)


if __name__ == '__main__':
    unittest.main()

