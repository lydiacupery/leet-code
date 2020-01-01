# Solution

Go through all the rows and columns, if a value of a spot is 1, then use DFS (or BFS) to find all connected spots and set the value of those spots to 0.  This will be one group, so increment the count.  Doing this allows you to find all unconnected groups or the number of friend circles.

I used DFS to find the connected components of the graph, there is no reason I couldn't have used BFS instead.  

## Runtime

- Time Complexity
  O(rows * columns)
- Space Complexity
 O(1) since just overwriting the array