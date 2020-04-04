import math
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if(len(nums) == 0):
          return -1
        return self.searchHelper(nums, target, 0, len(nums) - 1)
    
    def searchHelper(self, nums, target, startIndex, stopIndex):
      if(stopIndex < startIndex):
        return -1

      midIndex = startIndex + math.ceil((stopIndex - startIndex) / 2)

      if(nums[midIndex] == target):
        return midIndex

      array1Sorted = nums[midIndex] > nums[startIndex]
      array2Sorted = nums[stopIndex] > nums[midIndex]

      if(array1Sorted and target >= nums[startIndex] and target <= nums[midIndex]):
        return self.searchHelper(nums, target, startIndex, midIndex - 1) 

      elif(array2Sorted and target >= nums[midIndex] and target <= nums[stopIndex]):
        return self.searchHelper(nums, target, midIndex + 1, stopIndex)

      else:
        if(array1Sorted):
          return self.searchHelper(nums, target, midIndex +1, stopIndex)
        else:
          return self.searchHelper(nums, target, startIndex, midIndex - 1) 
