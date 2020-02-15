class Solution(object):
    M = []
    def findCircleNum(self, M):
      self.M = M
      friendCircleCount = 0
      # for each entr in M, if it is 1 add 1 and then do a bfs that mutates the array
      for rowIndex, row in list(enumerate(M)):
        for colIndex, _ in list(enumerate(row)):
          if M[rowIndex][colIndex] == 1:
            friendCircleCount += 1
            self.bfs(rowIndex)
      return friendCircleCount
      
    def bfs(self, rowIndex):
      adjFriends = [rowIndex]
      while(len(adjFriends) > 0):
          adj = adjFriends.pop()
          for col_index, _ in enumerate(self.M[adj]):
            if(self.M[adj][col_index] == 1):
              self.M[adj][col_index] = 0
              self.M[col_index][adj] = 0
              adjFriends.append(col_index)




class UnionFindSolution(object):
    def findCircleNum(self, M):
      uf = UnionFind(len(M))
      for rowIndex, row in list(enumerate(M)):
        for colIndex, _ in list(enumerate(row)):
          if M[rowIndex][colIndex] == 1:
            uf.union(rowIndex, colIndex)
            
      return uf.count
    

class UnionFind(object):
  def __init__(self,len):
    self.count = len
    self.parent = []
    self.rank=[]
    for num in range(len):
      self.parent.append(num)
      self.rank.append(0)
  
  def find(self, num):
    while(num != self.parent[num]):
      #path compression
      self.parent[num] = self.parent[self.parent[num]]
      num = self.parent[num]
    return num

  def union(self, p, q):
    rootP = self.find(p)
    rootQ = self.find(q)
    if(rootP == rootQ):
      return
    #this could be optimized (Which should be parent of which?)
    # self.parent[rootP] = rootQ
    if self.rank[rootP] > self.rank[rootQ]:
      if self.rank[rootP] == self.rank[rooQ]:
        self.rank[rootP] += 1
      self.parent[rootQ] = rootP
    else:
      self.parent[rootP] = rootQ
    self.count -= 1






