import unittest
from solution import Solution 

class TestStringMethods(unittest.TestCase):

    # def test_topological_sort(self):
    #     graph = Graph([0, 1, 2, 3, 4, 5, 6])
    #     graph.add_dependency(1, 4)
    #     graph.add_dependency(2, 4)
    #     graph.add_dependency(4, 3)
    #     graph.add_dependency(3, 5)
    #     result = graph.topological_sort()
    #     self.assertLess(result.index(2),result.index(4))
    #     self.assertLess(result.index(2),result.index(5))
    #     self.assertLess(result.index(2),result.index(3))

    #     self.assertLess(result.index(1),result.index(4))
    #     self.assertLess(result.index(1),result.index(5))
    #     self.assertLess(result.index(1),result.index(3))

    # def test_topological_sort_returns_empty_if_cycle(self):
    #     graph = Graph([0, 1, 2, 3, 4, 5, 6])
    #     graph.add_dependency(1, 4)
    #     graph.add_dependency(2, 4)
    #     graph.add_dependency(4, 3)
    #     graph.add_dependency(3, 5)
    #     graph.add_dependency(5, 1)
    #     result = graph.topological_sort()
    #     self.assertEqual(len(result), 0)
    
    # def test_sort_items(self):
    #     result = sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3,6],[],[],[]])
    #     print("result", result)

    def test_1(self):
        solution = Solution()
        self.assertEqual(solution.minSteps(3), 3)
    



if __name__ == '__main__':
    unittest.main()
