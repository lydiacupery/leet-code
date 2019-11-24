# Solution

Since the digits are stored in reverse order, the first digit will be the ones, the second digits the tens etc.  This means we can add the first digit in the first list with the first digit in the second list, the second digit from the first list with the second digit from and the second list and so on.

To add the digits together in the correct order keeping iterating through the lists while either list still has values.  If both lists have values, take values from each of the lists, increment the pointers for each of the lists, and add the sum of both of those values to the resulsts list.  If only one of the lists still has vaues, only take the value from that one list and increment that one list.

What if the sum of the values from the two lists is 10 or bigger?  It means that we will have to carry a 1 to the next digit.  I store this in a 'carry' variable.  This carry will be used when calculating the value of the next digit in the result list.  The value of the current digit when the sum value is 10 or bigger should be however much larger the current value is than 10 (current value mod 10).

## Runtime

- Time Complexity
  If n is the length of l1, and m is the length of l2 then time complexity is O(max(l1, l2)).  Must iterate through the longer list to get all the values to sum up.
- Space Complexity
  The length of the new list is at most max(l1,l2) + 1 (+1 because there could be a carry value).  So the space complexity is O(max(m,n)).