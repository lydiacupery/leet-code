# node class
# class Node:
#   def __init__(self, value):
#     self.value = value
#     self.adj = set()
#   def addAdj(self, adj):
#     self.adj.add(adj)
  

# class Solution:
#   # method to add ADJ
#   def join(self, n1, n2):
#     n1.addAdj(n2)
#     n2.addAdj(n1)

#   def findShortest(self, graph_nodes, graph_from, graph_to, ids, val):
#       nodes = {i+1: Node(i + 1) for i in range(len(ids))}
#       # setup nodes
#       for start, end in zip(graph_from, graph_to):
#         self.join(nodes[start], nodes[end])
      
#       q = deque()
#       visited = {}

#       for i, colorId in enumerate(ids):
#         if colorId == val:
#           visited[i + 1] = (i + 1, 0)
#           q.append(nodes[i+1])
      
#       while(q):
#         current = q.popleft()
#         source, distance = visited[current.value]

#         for a in current.adj:
#           if a.value not in visited:
#             visited[a.value] = (source, distance + 1)
#             q.append(a)
#           else:
#             if visited[a.value][0] == source:
#               continue
#             else:
#               return distance + visited[a.value][1] + 1
          
#           return -1
        
class Grid:
  def __init__(self, grid):
    self.grid = grid
    self.visited = {}
    self.len = len(self.grid)
    self.width = len(self.grid[0]) if self.grid[0] else 0
  
  def visit(self, xLoc, yLoc):
    self.visited[str(xLoc)+str(yLoc)] = "visited"
  
  def isVisited(self, xLoc, yLoc):
    if str(xLoc)+str(yLoc) in self.visited:
      return True
    return False

  def dfs(self, yLoc, xLoc):
    if( xLoc < 0 or yLoc < 0 or yLoc >= self.len or xLoc >= self.width or self.isVisited(xLoc, yLoc) or self.grid[yLoc][xLoc] == 0):
      return 0
    self.visit(xLoc, yLoc)
    adjs = [[y, x] for x in range (xLoc - 1, xLoc + 2) for y in range (yLoc -1, yLoc + 2)]
    dfsAdjs = [self.dfs(adj[0], adj[1]) for adj in adjs]

    return 1 + sum(dfsAdjs)



class Solution:
  def maxRegion(self, grid):
    maxDfs = 0
    grid = Grid(grid)
    for y, row in enumerate(grid.grid):
      for x, col in enumerate(row):
        if col == 1 and not grid.isVisited(y, x):
          getCurr = grid.dfs(y, x)
          print("curr", getCurr)
          maxDfs = max(getCurr, maxDfs)
    return maxDfs

      
  