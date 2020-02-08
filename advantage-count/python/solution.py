from collections import deque

class Solution(object):
    def advantageCount(self, A, B):
        sortedA = sorted(A)
        d = deque(sortedA)
        result = [None] * len(A)
        discarded = []
        sortedB = sorted(list(enumerate(B)), key = lambda x: x[1])
        for initalI, v in sortedB:
          while(d and d[0] <= v):
            discarded.append(d.popleft())
          if(d):
            result[initalI] = d.popleft()
          else:
            result[initalI] = discarded.pop()
        return result
