# Solution

Solution 1:
  In my first attempted:
  - If the cost of building a library is less than or equal to the cost of building a road, simply return the cost of building a library for each city
  Otherwise
     - created a graph with edges between each city with a path between it
     - for each city (which is now a 'node' in the graph), if the city has not been visited, add a library to the city.  Add that library to the library count.  Get the number of roads required to connect to all adjacent cities with roads.  Add that number to the road count.
      - To get the number of connecting roads required, I did a dfs from the root city (the city with a library).  For each neighbor, add 1 for the path to get to the neighbor plus whatever the number of connecting roads forr the neighbor is.  Mark as visited.
    - I then had the total library count and road count.  I return the result of multiplying the counts with the costs.

Solution 2:
Solution 1 timed out for test case 4.  Solution 2 uses union find to be more time efficient.

I created a UnionFind graph.
- findParent finds the parent or 'subset' of a given value.  Uses path compression so the find can skip going through each link each time.
- connect joins two subsets together.  Uses union by rank so that the tree doesn't get really skewed.  
Instaed, makes the node the parent that already has children underneath it (has a higher rank).  Each time two subsets are joined together, the union count is incremented.

I then used the UnionFind graph to solve the problem.  
- For each road between a city, called the 'connect' method on union find.
- Get the total number of roads needed (union count)
- For each parent that is a root (this.graph.findParent(i) ===i), there must be a library in the root.  Incremen the library count.
- Return the cost of building a library * library count + cost of building a road * road count