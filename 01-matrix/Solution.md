# Solution

If the value of the cell of 0, the distance of the nearest cell is 0.

Otherwise, the distance of the nearest cell is the minimum distance to the left, right, bottom, or top plus one.  How do we get the minimum distance to the left, right, bottom, or top?

I can calculate all the minimum distance from 0s from the left and top by starting in the top left corner.  Going from top to bottom and left to right, for each square I take the minimum of the square above and the square to the left.  I then multiply this minimum wih the initial value in the square; if the initial value in the square is 0, the distance is 0.

The gives us a matrix that has all the minimum distances if one just was calculating the minimum distances from the top and left.  It does not include minimum distances calculated from the bottom or right (for instance, if a square had a 0 beneath it).

To cover this case, go from the bottom to the top, right to left.  For each square, take the minimum of the square below it and to the right.  Then, compare this minimum to the value calculated when going form top to bottom/left to right.  The square will then have the minimum distance coming from any direction.



## Runtime

- Time Complexity
  Where N is the length of the matrix and M is the width, the runtime is O(N*M)
- Space Complexity
 O(1) since just mutationg original array 