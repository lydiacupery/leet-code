# node class
class Node:
  def __init__(self, value):
    self.value = value
    self.adj = set()
  def addAdj(self, adj):
    self.adj.add(adj)
  


# Complete the findShortest function below.

#
# For the weighted graph, <name>:
#
# 1. The number of nodes is <name>_nodes.
# 2. The number of edges is <name>_edges.
# 3. An edge exists between <name>_from[i] to <name>_to[i].
#
#
class Solution:
  # method to add ADJ
  def join(self, n1, n2):
    n1.addAdj(n2)
    n2.addAdj(n1)

  def findShortest(self, graph_nodes, graph_from, graph_to, ids, val):
      nodes = {i+1: Node(i + 1) for i in range(len(ids))}
      # setup nodes
      for start, end in zip(graph_from, graph_to):
        self.join(nodes[start], nodes[end])
      
      q = deque()
      visited = {}

      for i, colorId in enumerate(ids):
        if colorId == val:
          visited[i + 1] = (i + 1, 0)
          q.append(nodes[i+1])
      
      while(q):
        current = q.popleft()
        source, distance = visited[current.value]

        for a in current.adj:
          if a.value not in visited:
            visited[a.value] = (source, distance + 1)
            q.append(a)
          else:
            if visited[a.value][0] == source:
              continue
            else:
              return distance + visited[a.value][1] + 1
          
          return -1
        



  
  