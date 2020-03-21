import { Solution, Graph } from "./sort-item-by-groups-respecting-dependencies"



describe('sort items by groups respecting dependencies', () => {
        it("1", () => {
          const graph = new Graph([0, 1, 2, 3, 4, 5,  6])
          graph.addDependancy(1, 4)
          graph.addDependancy(2, 4)
          graph.addDependancy(4, 3)
          graph.addDependancy(3, 5)
          const order = graph.topologicalSortForAll()


          // 2 should be before 4, 3, 5
          const indexFor2 = order.findIndex(isNumber(2))
          const indexFor3 = order.findIndex(isNumber(3))
          const indexFor4 = order.findIndex(isNumber(4))
          const indexFor5 = order.findIndex(isNumber(5))

          expect(indexFor2).toBeLessThan(indexFor4)
          expect(indexFor2).toBeLessThan(indexFor5)
          expect(indexFor2).toBeLessThan(indexFor3)

          // 1 should be before 4, 3, 5
          const indexFor1 = order.findIndex(isNumber(1))
          expect(indexFor1).toBeLessThan(indexFor4)
          expect(indexFor1).toBeLessThan(indexFor5)
          expect(indexFor1).toBeLessThan(indexFor3)
        })
        it("2 - throws error if is cycle", () => {
          const graph = new Graph([0, 1, 2, 3, 4, 5,  6])
          graph.addDependancy(1, 4)
          graph.addDependancy(2, 4)
          graph.addDependancy(4, 3)
          graph.addDependancy(3, 5)
          graph.addDependancy(5, 1)
         expect(() => graph.topologicalSortForAll()).toThrowError()


        })
        it("3", () => {
          const result = Solution.sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3,6],[],[],[]])
          console.log({result})

        })
        it("4", () => {
          const result = Solution.sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3],[],[4],[]])
          console.log({result})
        })
        it("5", () => {
          const result = Solution.sortItems(5,  5,[2,0,-1,3,0], [[2,1,3],[2,4],[],[],[]] )
          console.log({result})

        })
})


const isNumber: (n: number) => (x: number) => boolean = n => (x: number) => x === n