# Solution

Approach: find the minimum cost of naviagating to each square.  The cost of navigating to a square is the cost of the square plus the minimum cost of either the square above it or the square to the left.  This is because a square can only be reached coming from its left or top neighbor.

There are a couple edge cases.
- The first row
  When calculating the values of the squares for the first row, there are no squares above them.  So the total value of the squares on the first row is just the original value of the square plus the value of the square to the left.
- The first column
  When calculating the values of the squares in the first column, there are no squares to the right of them.  The total value of the squares in the first column is just the original value of the square plus the value of the square to the top.

## Runtime

- Time Complexity
  O(m*n) where m is the length of the array and n is the length of each element in the array.
- Space Complexity
  O(1) space since modifying the initial array