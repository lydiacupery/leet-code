export function accountsMerge(accounts: string[][]): string[][] {
  const g = new Graph();

  for (const account of accounts) {
    const accountName = account[0]!;
    const existingNodes: Node[] = [];
    for (const email of account.slice(1)) {
      const node = g.addOrFindNode(accountName, email);
      existingNodes.push(node);
    }
    if (existingNodes[0]) {
      for (const existingNode of existingNodes.slice(1)) {
        g.addEdge(existingNodes[0], existingNode);
      }
    }
  }

  const results: string[][] = [];
  for (const n of g.nodes()) {
    if (!n.isVisited) {
      const result = [n.name];
      result.push(...traverse(n));
      result.sort();
      results.push(result);
    }
  }

  return results;
}

function traverse(n: Node): string[] {
  n.visit();
  const results: string[] = [];
  for (const adj of n.adjacents) {
    if (!adj.isVisited) {
      results.push(...traverse(adj));
    }
  }
  return [...results, n.email];
}

class Graph {
  keyToNode: Map<string, Node>;
  constructor() {
    this.keyToNode = new Map();
  }

  addOrFindNode(name: string, email: string): Node {
    if (this.keyToNode.get(email)) {
      return this.keyToNode.get(email)!;
    }
    const node = new Node(name, email);
    this.keyToNode.set(email, node);
    return node;
  }

  addEdge(n1: Node, n2: Node) {
    n1.addAdjacent(n2);
    n2.addAdjacent(n1);
  }

  nodes() {
    return this.keyToNode.values();
  }
}

class Node {
  name: string;
  email: string;
  isVisited: boolean;
  adjacents: Set<Node>;
  constructor(name: string, email: string) {
    this.isVisited = false;
    this.name = name;
    this.email = email;
    this.adjacents = new Set();
  }

  addAdjacent(n: Node) {
    this.adjacents.add(n);
  }

  visit() {
    this.isVisited = true;
  }
}
