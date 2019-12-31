# Solution
  Want to find the number of 'groups' of 1s. 

  I go through the grid and whenever I find a 1, do a dfs to find all adjacent 1s.  I mark those 1s as 'visited' and increment the count.  If after that, I find another 1, I know that one is not connected to the previous group (otherwise, it would have been marked as 'visited').  So each time I find I one I know I have found another group or 'island.'


## Runtime

- Time Complexity
  O(mn) because every part in the grid is checked aprrx. once
- Space Complexity
  O(1) because are just overwriting values in current array