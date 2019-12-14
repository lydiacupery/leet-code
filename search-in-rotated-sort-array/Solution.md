# Solution 1 - recursively build left & right  trees

# Approach


Recall, in pre-order visit root, then left, then right.
In in-order, visit root then left then right.

We can use the combination of the two lists to determine
  - the root node
  - which values are in the left & right sub trees

The first value in the pre-order list is the root node.  However, just looking at the pre-order list, we do not know which values are in the left sub tree and which values are in the right sub tree.  

The in-order list will have the left subtree values to the left of the root node and the right subtree values to the right of the root node.  So, we can use the root node frm the pre-order list together with the in-order list to determine the left and right subtree.

Now know the root node along with the values in the left on right subtree.  We can set the root node of the tree to be the root node and compute its left and right subtree recursively. We will hit the base case when there are no more subtree values meaning we can just return null for the subtree.

Initially, I solved this problem by passing in the in order and pre order values for each subtree.  The downside of this approach was that I kept searching through the inorder list to find the root node as determined by the preorder list.  To make this searching more efficient, I am now creating a map of value -> index for the inorder list, making it quicker to find the index in the inorder list of the root node.



## Runtime
Time Complexity: O(N)?
Space Complexity: O(N) - for the map 

 