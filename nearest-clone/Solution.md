# Solution
For a given index(i) into nums if we can create a list of number for which we know that
  - each number in the list is greater than the minimum for that i
  - the numbers are sorted with the smallest valid number 'on top'
then we could use that list to determine if at i there is a 132 pattern where i is the 3.
-> Since each number in the list is greater than the min for i, there must already be a 1.
-> The current index would be the 3
-> We can check the min number in the valid list (which we will store on top).  Is that number smaller than the number at the current index?  If not, since we are looking at the smallest number already, there is no valid combination at this index.  If so, we must have a valid combinatation so return true.

To ensure that the stack is a valid list with the min number on top for a given index:
  -> for that index, pop off anything off the top of the stack where the top of the stack is less than the minimum for the index.  We only know there is a '1' if the value at the top of the stack is greater than the min value for the index.


## Runtime

- Time Complexity
  O(n)
  Is O(n) time to get min array
  Then traverse through nums again in O(n), where only n values can be pushed onto the stack
- Space Complexity
  O(n) The stack can be up to n, the min array of O(n) is used