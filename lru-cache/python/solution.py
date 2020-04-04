from collections import deque


class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.key_to_val = {}
        self.capacity = capacity
        self.queue = deque()

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        if key not in self.key_to_val:
            return -1
        # move node to 'head'
        self.queue.remove(key)
        self.queue.append(key)
        return self.key_to_val[key]

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        # add to map
        self.key_to_val[key] = value
        # add to queue or 'move to head' if already in queue
        if key in self.queue:
            self.queue.remove(key)
        self.queue.append(key)

        # if hit capactiy
        if len(self.key_to_val) > self.capacity:
            oldest = self.queue.popleft()
            del self.key_to_val[oldest]
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)


class Node():
    def __init__(self, value=None, key=None):
        self.prev = None
        self.next = None
        self.value = value
        self.key = key


class LRUCache2(object):
    def __init__(self, capacity):
        self.capacity = capacity
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head
        self.cache = {}

    # add node to head
    def add_node(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def remove_node(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def move_node_to_front(self, node):
        self.remove_node(node)
        self.add_node(node)

    def pop_last(self):
        node = self.tail.prev
        self.remove_node(node)
        return node

    def get(self, key):
        if not key in self.cache:
            return -1
        node = self.cache[key]
        self.move_node_to_front(node)
        return node.value

    def put(self, key, value):
        if key in self.cache:
            # move node to front
            node = self.cache[key]
            self.move_node_to_front(node)
            node.value = value
        else:
            # make a new node
            node = Node(value, key)
            self.add_node(node)
            self.cache[key] = node

            # if cache is too big, delete last
            if len(self.cache) > self.capacity:
                oldest_node = self.pop_last()
                del self.cache[oldest_node.key]
