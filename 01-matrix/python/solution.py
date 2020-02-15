# from itertools import accumulate

# class Solution(object):
#     def createMinArray(self, nums):
#       return (list(accumulate(nums, lambda curr, prev: min(prev,curr))))
  
#     def find132pattern(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: bool
#         """
#         # make the min array
#         minArray = self.createMinArray(nums)
#         stack = []
#         for i, v in reversed(list(enumerate(nums))):
#           if(v >= minArray[i]):
#             if(stack and stack[-1] <= minArray[i]):
#                 stack.pop()
#             if(stack and stack[-1] < v):
#               return True
#             stack.append(v)
#         return False


class Solution(object):
    def updateMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        height = len(matrix)
        width = len(matrix[0]) if len(matrix[0]) else 0
        for y, row in enumerate(matrix):
          for x, col in enumerate(row):
            if (col == 0):
              pass
            elif (y == 0 and x == 0):
              matrix[y][x] = 10000 #largest possible num for this prbolem
            elif (y == 0):
              matrix[y][x] = matrix[y][x-1] + 1
            elif(x == 0):
              matrix[y][x] = matrix[y-1][x] + 1
            else:
              matrix[y][x] = min(matrix[y-1][x], matrix[y][x-1]) + 1


        # reverse
        for y, row in reversed(list(enumerate(matrix))):
          for x, col in reversed(list(enumerate(row))):
            if (col == 0 or (y == height -1  and x == width -1)):
              pass
            elif (y == height - 1):
              matrix[y][x] = min(matrix[y][x], matrix[y][x+1] + 1)
            elif(x == width - 1):
              matrix[y][x] = min(matrix[y+1][x] + 1, matrix[y][x])
            else:
              matrix[y][x] = min (min(matrix[y+1][x], matrix[y][x+1]) + 1, matrix[y][x])
        
        return matrix
        


        