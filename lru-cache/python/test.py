import unittest
from solution import LRUCache2


class TestStringMethods(unittest.TestCase):

    def test(self):
        cache = LRUCache2(2)
        cache.put(1, 1)
        cache.put(2, 2)
        self.assertEqual(cache.get(1), 1)
        cache.put(3, 3)  # evicts key 2
        self.assertEqual(cache.get(2), -1)
        cache.put(4, 4)
        self.assertEqual(cache.get(1), -1)
        self.assertEqual(cache.get(3), 3)
        self.assertEqual(cache.get(4), 4)

    # def test(self):
    #     cache = LRUCache2(2)
    #     self.assertEqual(cache.get(2), -1)
    #     cache.put(2, 6)
    #     self.assertEqual(cache.get(1), -1)
    #     cache.put(1, 5)
    #     cache.put(1, 2)
    #     self.assertEqual(cache.get(1), 2)
    #     self.assertEqual(cache.get(2), 6)


if __name__ == '__main__':
    unittest.main()
