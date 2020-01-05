# Solution

In my first approach (Solution), I recursively call a helper with the next level of tree nodes.  The helper pushes the values of next level of tree nodes on to the return array, and then uses the prevoius level nodes to find the nodes for the next level (stored in tempArray). The helper will continue to push levels of tree nodes onto the return array until there are no nodes in the next level.

In my second approach (Solution2), I created a helper that takes a node and the level.  The level specifies where in the array the node should be inserted.  If there already exists an entry in the result array for that level, append the node to the level.   Otherwise, create that level.  For each of the node's children (left and right), call the helper with an incremented level (because the children of the node belong one level 'down').


## Runtime

- Time Complexity
  O(n) since has to visit each node
- Space Complexity
 O(n) where n is the number of nodes, because result array must contain all nodes