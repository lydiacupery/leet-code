from collections import defaultdict

def sortItems(n, m, group, beforeItems):
  # create group for each item that has no grup
  for item in range(n):
    if group[item] == -1:
      group[item] = m
      m+1
  
  #initialize item_graph and group_graph
  item_graph = Graph(list(range(n)))
  group_graph = Graph(list(range(m+1)))

  # build the graph for item & group
  for item in range(n):
    for before_item in beforeItems[item]:
      item_graph.add_dependency(before_item, item)
      if(group[before_item] != group[item]):
        group_graph.add_dependency(group[before_item], group[item])
  
  # do topological sort
  sorted_items = item_graph.topological_sort()
  sorted_groups = group_graph.topological_sort()
  if(not sorted_items or not sorted_groups):
    return []
  
  #order items within groups
  order_within_group = defaultdict(list)
  for item in sorted_items:
    order_within_group[group[item]].append(item)

  toReturn = [] 
  for group in sorted_groups:
    toReturn.extend(order_within_group[group])
  
  return toReturn


class Graph(object):
  def __init__(self, values):
    self.val_to_node = {}
    for v in values:
      self.val_to_node[v] = Node(v)

  def topological_sort(self):
    array = []
    for node in self.val_to_node.values():
      if(node.visit_status == 'not visited' ):
        try:
          self.topological_sort_util(node, array)
        except Exception:
          return []
    array.reverse()
    return array

  def add_dependency(self, parent, dependant):
    parent_node = self.val_to_node[parent]
    dependant_node = self.val_to_node[dependant]
    parent_node.add_adjacent(dependant_node)

  def topological_sort_util(self, node, array):
    node.visit_status = 'visiting'
    for adj in node.adj:
      if(adj.visit_status == 'visiting'):
        raise Exception('loop!')
      if(adj.visit_status == 'not visited'):
        self.topological_sort_util(adj, array)
    
    node.visit_status = 'visited'
    array.append(node.value)
      

class Node(object):
  def __init__(self, value):
    self.value = value
    self.visit_status = 'not visited'
    self.adj = []
  
  def add_adjacent(self, adj):
    self.adj.append(adj)



    


