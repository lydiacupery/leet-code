# Solution

I'll use dynamic programming to build to build up an mulitdimensional array with the number of ways to go to any given square.  I'll build this new array on top of the existing array, to make the space complexity O(1)

The number of unique paths for array[m][n] is:
- the number of unique paths for array[m-1][n]
- the number of unique paths for array[m][n-1]
- multiplied by 0 if array[m][n] is an obstacle, 1 if array[m][n] is not an obstacle, basically if array[m][n] is an obstacle the number of unique paths is 0

What if m is 0? array[m-1][n] would be undefined.  Then the number of unique paths is
- the number of unique paths for array [m][n-1]
- multiplied by 0 if array[m][n] is an obstacle, 1 if array[m][n] is not an obstacle 

What if n is 0?  Then array[m][n-1] would be undefined.  The number of unique paths is
- the number of unique paths for array [m-1][n]
- multiplied by 0 if array[m][n] is an obstacle, 1 if array[m][n] is not an obstacle 

If both n and m are 0?  Then just return 1 if NOT an obstacle, 0 if an obstacle.

After overwriting the initial array with the calculated array of number of ways to get to a certain square, going to the farthest bottom right square will give us the number of unique paths to go from the top left to bottom right.

## Runtime

- Time Complexity
  O(rows * columns)
- Space Complexity
 O(1) since just overwriting the array