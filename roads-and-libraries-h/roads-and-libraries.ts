export class Solution {
    graph: Graph;
    public roadsAndLibraries(n: number, c_lib: number, c_road: number, cities: number[][]) {
      if(c_lib <= c_road){
        return c_lib * n
      }
      this.graph = new Graph(n)
      cities.forEach(c => {
        this.graph.connect(c[0], c[1])
      })


      let libraryCount = 0
      let roadCount = 0

      this.graph.allNodes().forEach(graphNode => {
        if(!graphNode.isVisisted){
          libraryCount++
          roadCount += this.dfs(graphNode)
        }
      })


      return libraryCount * c_lib + roadCount * c_road

  }

  private dfs(node: Node): number{
    node.visit() 
    let totalVisits = 0
    const neighbors = this.graph.getNeighborsForNode(node.value)
    neighbors.forEach(n => {
      if(!n.isVisisted){
      totalVisits += 1 + this.dfs(n)
      }
    })

    return totalVisits
  }
}

export class Solution2 {
  graph: UnionFindGraph
  public roadsAndLibraries(n: number, c_lib: number, c_road: number, cities: number[][]) {
      if(c_lib <= c_road){
        return c_lib * n
      }
    this.graph = new UnionFindGraph(n);
    for(const city of cities){
      this.graph.connect(city[0], city[1])
    }

    const roadCount = this.graph.getUnionCount()
    let libraryCount = 0
    for(let i = 1; i <=n ; i++){
      if(this.graph.findParent(i) === i){
        libraryCount++
      }
    }


    return roadCount * c_road + libraryCount * c_lib
  }



}

class UnionFindGraph {
  parent: number[]
  rank: number[]
  unionCount: number
  constructor(numberOrNodes: number){
    this.parent = Array.from({length: numberOrNodes + 1}).map((_, i) => i)
    this.rank = Array.from({length: numberOrNodes + 1}).map(_ => 0)
    this.unionCount = 0
  }

  findParent(index: number){
    while(this.parent[index] !== index){
      this.parent[index] = this.parent[this.parent[index]]
      index  = this.parent[index]
    }
    return index;
  }

  connect(index1: number, index2:number){
    const parent1 = this.findParent(index1)
    const parent2 = this.findParent(index2)
    if(parent1 !== parent2 ){
      this.unionCount++
      if (this.rank[parent1] > this.rank[parent2]) {this.parent[parent2] = parent1} 
      else if (this.rank[parent2] > this.rank[parent1]) {this.parent[parent1] = parent2} 
      else {
        this.rank[parent2]++
        this.parent[parent1] = parent2
      }

    }
  }

  getUnionCount() {
    return this.unionCount
  }
}


  


class Graph {
  nameToNode: Map<number, Node>; 
  nameToNeighborNames: Map<number, Set<number>>;
  constructor(numberOfNodes: number) {
    this.nameToNode = new Map()
    this.nameToNeighborNames = new Map()
    Array.from({length: numberOfNodes}).map((_, i) => {
      this.nameToNode.set(i + 1, new Node(i + 1))
    })
  }

  public connect(node1Val: number, node2Val: number){
    this.nameToNeighborNames.set(node1Val, this.nameToNeighborNames.get(node1Val) ? this.nameToNeighborNames.get(node1Val)!.add(node2Val) : new Set([node2Val]) )
    this.nameToNeighborNames.set(node2Val, this.nameToNeighborNames.get(node2Val) ? this.nameToNeighborNames.get(node2Val)!.add(node1Val) : new Set([node1Val]) )
  }

  public getNeighborsForNode(n: number) {
    const neighbors = this.nameToNeighborNames.get(n)
    if(!neighbors) { return []}
    return [...neighbors.values()].map(n => this.getNode(n))
  }

  public allNodes(){
    return [...this.nameToNode.values()]
  }

  public getNode(n: number){
      const node = this.nameToNode.get(n)
      if(!node) {throw new Error(`could not find node with name ${n}`)}
      return node

  }


}

class Node {
  value: number
  isVisisted: boolean
  constructor(value: number){
    this.value = value
    this.isVisisted = false
  }
  public visit(){
    this.isVisisted = true
  }
}