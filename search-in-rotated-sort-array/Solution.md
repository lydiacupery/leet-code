# Solution 1 - recursively build left & right  trees

# Approach


We do not know where the array is rotated but do know that the array is in ascending order.

An O(log n) runtime is achievable with binary search.  Usually with binary search, split the array into halves, then continue to explore the half of the array the target number would fall in.  If you explore until there is no more array left to be explored (the base case), the value does not exist in the array.

Binary search can be modified to work in this scenario:
- Similar to binary search, find the mid point of the values you are searching (the point between start and end)
- If 
  vals[start] < vals[mid] the first half of the array is in ascending order
  vals[mid] < vals[end] the second half of the array is in ascending order

  * If the first half of the array is in ascending order, and the target is in the first half of the array, we should continue to search the first half of the array.
  * If the second half of the array is in ascending order, and the target is in the 2nd half we should continue to search the 2nd half of the array.
  * If the target is not in the part of the array that is in ascending order, we should search the part of the array that is not in ascending order.


## Runtime
Time Complexity: log(N)
Space Complexity: O(1)

 