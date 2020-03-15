class UnionFindSolution(object):
    def roadsAndLibraries(self, n, c_lib, c_road, cities):
      if(c_lib <= c_road):
        return n * c_lib
      uf = UnionFind(n+1)

      for city1, city2 in cities:
        print("city", city1, city2)
        uf.union(city1, city2)
      
      libraryCount = 0
      for r in range(1, n+1):
        if(uf.find(r) == r):
          libraryCount += 1
      print("libraryCount" ,libraryCount, "road count", uf.count)
      
      return (libraryCount * c_lib) + (uf.count * c_road)

    

class UnionFind(object):
  def __init__(self,len):
    self.count = 0
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
    if self.rank[rootP] > self.rank[rootQ]:
      if self.rank[rootP] == self.rank[rootQ]:
        self.rank[rootP] += 1
      self.parent[rootQ] = rootP
    else:
      self.parent[rootP] = rootQ
    self.count += 1






