from itertools import accumulate

class Solution(object):
    def createMinArray(self, nums):
      return (list(accumulate(nums, lambda curr, prev: min(prev,curr))))
  
    def find132pattern(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # make the min array
        minArray = self.createMinArray(nums)
        stack = []
        for i, v in reversed(list(enumerate(nums))):
          if(v >= minArray[i]):
            if(stack and stack[-1] <= minArray[i]):
                stack.pop()
            if(stack and stack[-1] < v):
              return True
            stack.append(v)
        return False


