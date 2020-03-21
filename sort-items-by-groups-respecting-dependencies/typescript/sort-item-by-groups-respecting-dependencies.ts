export class Solution {
  // this would take a graph and return the sorted nodes?
  public static sortItems(
    n: number,
    m: number,
    group: number[],
    beforeItems: number[][]
  ) {
    const groupToItems = new Map<number, number[]>()
    const itemToGroup = new Map<number, GroupItem>()
    const groupDependencies = new Map<number, number[][]>()
    const numberToGroup = Array.from({ length: m }).map((_, i) => ({
      type: "group" as "group",
      value: i
    }))

    Array.from({ length: n }).forEach((_, i) => {
      if (group[i] === -1) {
        const singleGroup = {
          type: "single" as "single",
          value: i
        }
        itemToGroup.set(i, singleGroup)
      } else {
        itemToGroup.set(i, numberToGroup[group[i]!]!)
        groupToItems.set(
          group[i],
          groupToItems.get(group[i]) ? [...groupToItems.get(group[i])!, i] : [i]
        )
      }
    })

    const groupItems = new Set(itemToGroup.values())

    const graph = new Graph([...groupItems])

    // if no group, put item in directly
    beforeItems.map((bi, i) => {
      bi.forEach(e => {
        // e is the parent o i
        const eGroup = itemToGroup.get(e)!
        const iGroup = itemToGroup.get(i)!
        if (eGroup !== iGroup) {
          graph.addDependancy(eGroup, iGroup)
        } else {
          groupDependencies.set(
            eGroup.value,
            groupDependencies.get(eGroup.value)
              ? [...groupDependencies.get(eGroup.value)!, [e, i]]
              : [[e, i]]
          )
        }
      })
    })

    try {
      const sorted = graph.topologicalSortForAll()
      let results: number[] = []
      sorted.map(s => {
        if (s.type === "single") {
          results.push(s.value)
        } else {
          const groupVals = groupToItems.get(s.value)!
          const tempGraph = new Graph(groupVals)
          groupDependencies.get(s.value) && groupDependencies.get(s.value)!.map(v => {
            tempGraph.addDependancy(v[0], v[1])
          })
          const groupResults = tempGraph.topologicalSortForAll()
          results.push(...groupResults)
        }
      })

      return results
    } catch (e) {
      return []
    }
  }
}

type GroupItem = {
  type: "single" | "group"
  value: number
}

export class Graph<T> {
  numberToNode: Map<T, Node<T>>

  constructor(values: T[]) {
    this.numberToNode = new Map()
    values.map(v => this.numberToNode.set(v, new Node(v)))
  }

  addDependancy(parent: T, dependant: T) {
    const depandantNode = this.numberToNode.get(dependant)
    const parentNode = this.numberToNode.get(parent)
    if (!depandantNode || !parentNode) {
      throw new Error(
        `could not find node associated with number ${dependant} or ${parent}`
      )
    }
    parentNode.dependants.add(depandantNode)
  }
  public topologicalSortForAll() {
    const stack: T[] = []
    Array.from(this.numberToNode.values()).forEach(node => {
      if (node.isVisited === "not visited") {
        this.topologicalSortHelper(node, stack)
      }
    })
    return stack.reverse()
  }

  private topologicalSortHelper(n: Node<T>, stack: T[]) {
    n.setVisiting()
    n.dependants.forEach(d => {
      if (d.isVisited === "visiting") {
        throw new Error("cycle!" + JSON.stringify(d, null, 2))
      }
      if (d.isVisited === "not visited") {
        this.topologicalSortHelper(d, stack)
      }
    })
    n.setVisited()
    stack.push(n.value)
  }
}

class Node<T> {
  value: T
  isVisited: "not visited" | "visiting" | "visited"
  dependants: Set<Node<T>>
  constructor(value: T) {
    this.isVisited = "not visited"
    this.dependants = new Set()
    this.value = value
  }
  public setVisited() {
    this.isVisited = "visited"
  }
  public setVisiting() {
    this.isVisited = "visiting"
  }
}
