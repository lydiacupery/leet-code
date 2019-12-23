# Solution

Want to maximize the advantage of A with respect to B.  So, want to have as many numbers as possible in A be bigger than B.  

*SOLUTION 1*

Solution 1 goes through B, and for each value in B tries to find the smallest possible value than B in A.  So that all of A doesn't need to be gone through each time, I sort A and then do a binary search in A to find the smallest possible value bigger than B.

The search goes like this:
  - given a start and stop index, find the middle index and the value at this index
  - if the middle value is greater or equal to than b, search from the middle index to the end index (just like in binary search)
  - if the middle value is less than b, search the from the start index to the middle index (like binary search)
  - the base case however, is not quite the same as binary search since we are not looking for a specific value but the smallest value greater than the value for b.  So, if there exists a value to the middle value, check that value.  If the value of b is bigger or equal to the previous value but less than the middle value, the middle value must the the smallest possible value bigger than B.  Return the middle index.
  - If the stop index is smaller than the stop index, no values bigger than the value of B (excluding the value at potentially index 0 if the array is length one) were found.  Return the smallest value (the value at index 0) - the smallest value.  Let's save the larger values for a case where they might be bigger than the value in B.

  For each value in B, do this binary search to get the corresponding index of the smallest possible value bigger than B in A.  Return the array of those values.

  *SOLUTION 2*
  Solution 2 takes a different approach to find the smallest possible value bigger than B.

  I keep a copy of the original B array but also create a sorted copy of B (desc) and sorts A.

  I then create a dictionary that will store an array of the smallest possible values of a given value of B (it's an array in case there are duplicates of a value in B).

  To populate this dictionary, I loop through the B sorted in descending order.  If the largest value of A is bigger than the largest value of B, I append the value in A to the dictionary entry of the value of B.  I pop the value of A off the array.
  
  Basically, I'm starting with the largest value from A and comparing it to the largest value of B.  If the largest value of A is bigger than the largest value of B, set it in the dictionary, remove it from the possibilities, and keep going.  If it's not larger than B, don't set anything in the diciontary, and keep going.  This ensures that the largest values of A are being used for the largest possible values of B (because using a large value of A on a small value of B would be "wasteful").

  Finally, map through the unsorted B.  If there is a value in the dictionary array for the value in the unsorted B, pop off that value.  Otherwise, the number is not gonna be bigger than A, so just pop off an unused number from A.  Return this array.



## Runtime

- Time Complexity
  Solution1 O(NLogN) (does binary search N times)
  Solution2 O(NLogN)
- Space Complexity N