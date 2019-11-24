# Solution 1 - convert linked list to an array

Since its difficult to get to the location one might one in a linked list, this solution first converts the linked list to an array.

Once we have an array, we can convert the array to a BST.  The algorithm I used to do this:
- Find the root node of the array.  The root node is the middle element of the array.
- Recursively find the left and right sub tree of the array.  If there are no values to the left of the root node, the left sub tree is null.  Similarly, if there are not value to the right of the root node, the right sub tree is null.

## Runtime
Time Complexity: O(N) - must create array from BST and process each node in the array to create corresponding BST nodes.
Space Complexity: O(N) - will create a N length array.  


# Solution 2 - simulate an in-order traversal
We need to make it so that, after finishing building the left side of the BST, the array pointer is pointing at the root node (the middle node).

This means that the array pointer must be advanced once for each left node we traverse.

- Get the length of the linked list
- Using that length, find the middle of the linked list
- Create the left BST.  Creating the left BST will also advance the linked list pointer to the middle of the linked list.
- Create the root node, and set the left pointer to the left BST.
- Create the right BST.  Creating the right BST will advance the linked list pointer to the end of the list.
- Return the root node.

If we recursively follow this order, we will be going in the order of in-order traversal: visit left node child, visit node, visit right node cnode.  In-order traversal of a BST returns elements in ascending order. So, the order of nodes in in-order traversing matches the order of nodes in the linked list.

## Runtime
Time Complexity: O(N) - must process each node in the linked list once to form corresponding BST nodes
Space Complexity: O(logN) - for the recursion stack.  For N nodes the height is at most logN. 