# 1
        
# class Grid:
#   def __init__(self, grid):
#     self.grid = grid
#     self.visited = {}
#     self.len = len(self.grid)
#     self.width = len(self.grid[0]) if self.grid[0] else 0
  
#   def visit(self, xLoc, yLoc):
#     self.visited[str(xLoc)+str(yLoc)] = "visited"
  
#   def isVisited(self, xLoc, yLoc):
#     if str(xLoc)+str(yLoc) in self.visited:
#       return True
#     return False

#   def dfs(self, yLoc, xLoc):
#     if( xLoc < 0 or yLoc < 0 or yLoc >= self.len or xLoc >= self.width or self.isVisited(xLoc, yLoc) or self.grid[yLoc][xLoc] == 0):
#       return 0
#     self.visit(xLoc, yLoc)
#     adjs = [[y, x] for x in range (xLoc - 1, xLoc + 2) for y in range (yLoc -1, yLoc + 2)]
#     dfsAdjs = [self.dfs(adj[0], adj[1]) for adj in adjs]

#     return 1 + sum(dfsAdjs)



# class Solution:
#   def maxRegion(self, grid):
#     maxDfs = 0
#     grid = Grid(grid)
#     for y, row in enumerate(grid.grid):
#       for x, col in enumerate(row):
#         if col == 1 and not grid.isVisited(y, x):
#           getCurr = grid.dfs(y, x)
#           print("curr", getCurr)
#           maxDfs = max(getCurr, maxDfs)
#     return maxDfs

class Node:
  def __init__(self, value):
    self.visited = False
    self.value = value
    self.adj = set()
    self.distance = -1
  
  def addAdj(self, otherNode):
    self.adj.add(otherNode)
  
  def isVisited(self):
    return self.visited
  
  def visit(self):
    self.visited = True
  
  def setDistance(self, distance):
    self.distance = distance


class Graph:
  def __init__(self, gridEntries):
    #create nodes
    self.nodes = {}
    for entry in range(gridEntries):
      self.nodes[entry+1] = Node(entry+1)
  
  def connect(self, n1, n2):
    n1Node = self.nodes[n1]
    n2Node = self.nodes[n2]
    n1Node.addAdj(n2Node)
    n2Node.addAdj(n1Node)

  def find_all_distances(self, start):
    startNode = self.nodes[start]
    self.bfs_distance_marker(startNode, 0)
    result = [self.nodes[node].distance for node in filter(lambda x: x != start, self.nodes)]
    return result

  
  def bfs_distance_marker(self, currNode, distance):
    if currNode.isVisited():
      return
    currNode.setDistance(distance)
    currNode.visit()
    for adj in currNode.adj:
      self.bfs_distance_marker(adj, distance + 6)

class Solution:
  def findAllDistances(self, numNodes, edges, start):
    g = Graph(numNodes)
    for edge in edges:
      g.connect(edge[0], edge[1])
    return g.find_all_distances(start)







