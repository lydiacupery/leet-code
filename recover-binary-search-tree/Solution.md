# Approach
In in-order, visit root then left then right.
Because the left nodes are always smaller than the root and the right nodes are always greater than the root, traversing a BST in order should result in an ordered list.

If we traverse a BST in order and the current node is smaller than the previous node, the previous node (and maybe current node) must be in the wrong position.  Let's keep a reference to both those nodes and keep traversing.  If we run into another situation where the current node is smaller than the previous while traversing, it means the issue is actually higher up the tree.
For instance in, in this example tree n1 would initially be 1 and n2 would initially be 2 (since 2 is to the left of 1 but greater than 1)
   1 -- n1
  /
 3
  \
   2 -- n2
3 is also to the left of 1 and greater than 1.  Since 3 is higher up in the tree, swapping 3 with 1 would actually fix our problem where as swapping 1 with 2 would not.  So, we set n2 to 3:
 1 -- n1
  /
 3 - n2
  \
   2 

After traversing the tree, swap the values of n1 and n2.




## Runtime
Time Complexity: O(N)
Space Complexity: O(N) 

 