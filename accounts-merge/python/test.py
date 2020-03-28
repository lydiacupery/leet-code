import unittest
from solution import Solution


class TestStringMethods(unittest.TestCase):

    def test(self):
        solution = Solution()
        result = solution.accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], [
                                        "John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]])
        print("RESULT!", result)


if __name__ == '__main__':
    unittest.main()
