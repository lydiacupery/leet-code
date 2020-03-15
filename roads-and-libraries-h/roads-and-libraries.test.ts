import { Solution2 } from "./roads-and-libraries"


describe('roads and libraries', () => {
        it("1", () => {
        
        const sol = new Solution2()
        const res = sol.roadsAndLibraries(3, 2, 1, [
                [1, 2],
                [3, 1],
                [2, 3]
        ])
        expect(res).toEqual(4)
        })
        it("2", () => {
        
        const sol = new Solution2()
        const res = sol.roadsAndLibraries(6, 2, 5, [
                [1, 3],
                [3, 4],
                [2, 4],
                [1, 2],
                [2, 3],
                [5, 6]
        ])
        expect(res).toEqual(12)
        })
        it("3", () => {
        const sol = new Solution2()
        const res = sol.roadsAndLibraries(6, 2, 5, [
                [1, 3],
                [3, 4],
                [2, 4],
                [1, 2],
                [2, 3],
                [5, 6]
        ])
        expect(res).toEqual(12)
        })
        it("4", () => {
        const sol = new Solution2()
        const res = sol.roadsAndLibraries(5, 6, 1, [
                [1, 2],
                [1, 3],
                [1, 4],
        ])
        expect(res).toEqual(15)

        })
})
