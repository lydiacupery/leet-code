import { Solution1, Solution2 } from "./advantage-count"



describe('advantage count', () => {
        describe("getIndexForA", () => {
                it("1", () => {
                        const res = Solution1.binarySearchIndexForA([2,7,11,15], 1, 0, 3)
                        expect(res).toEqual(0)
                })
                it("2", () => {
                        const res = Solution1.binarySearchIndexForA([7,11,15], 10, 0, 2)
                        expect(res).toEqual(1)
                })
                it("3", () => {
                        const res = Solution1.binarySearchIndexForA([7,15], 4, 0, 1)
                        expect(res).toEqual(0)
                })
                it("3", () => {
                        const res = Solution1.binarySearchIndexForA([15], 11, 0, 0)
                        expect(res).toEqual(0)
                })
                it("4", () => {
                        const res = Solution1.binarySearchIndexForA([8, 12, 24, 32], 13, 0, 3)
                        expect(res).toEqual(2)
                })
                it("5", () => {
                        const res = Solution1.binarySearchIndexForA([8, 12, 32], 25, 0, 2)
                        expect(res).toEqual(2)
                })

        })
        describe("advantage count with s1", () => {
                it("1", () => {
                const A = [2,7,11,15]
                const B = [1,10,4,11]

                const res = Solution1.advantageCount(A, B)
                expect(res).toEqual([2,11,7,15])
                })
                it("2", () => {
                const A = [12,24,8,32]
                const B = [13,25,32,11]

                const res = Solution1.advantageCount(A, B)
                expect(res).toEqual([24,32,8,12])
                })
                it("3", () => {
                const A = [2,0,4,1,2]
                const B = [1,3,0,0,2]
                const res = Solution1.advantageCount(A, B)
                expect(res).toEqual([2,0,2,1,4])

                })
        })
        describe("advantage count with s2", () => {
                it("1", () => {
                const A = [2,7,11,15]
                const B = [1,10,4,11]

                const res = Solution2.advantageCount(A, B)
                expect(res).toEqual([2,11,7,15])
                })
                it("2", () => {
                const A = [12,24,8,32]
                const B = [13,25,32,11]

                const res = Solution2.advantageCount(A, B)
                expect(res).toEqual([24,32,8,12])
                })
                it("3", () => {
                const A = [2,0,4,1,2]
                const B = [1,3,0,0,2]
                const res = Solution2.advantageCount(A, B)
                expect(res).toEqual([2,0,2,1,4])
                })
                fit("4", () => {
                const A = [15,15,4,5,0,1,7,10,3,1,10,10,8,2,3]
                const B = [4,13,14,0,14,14,12,3,15,12,2,0,6,9,0]
                const res = Solution2.advantageCount(A, B)
                expect(res).toEqual([5,10,10,2,8,3,15,4,0,15,3,1,7,10,1])

                })
        })
})
