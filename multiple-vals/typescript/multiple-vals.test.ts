import { Solution } from "./multiple-vals"


describe('unique pths with obstacle', () => {
        it("1", () => {
                const res = Solution.multipleVals1([2, 3, 5, 5, 2, 9 ,8])
                expect(res.sort()).toEqual([2, 5].sort())
        })
        it("2", () => {
                const res = Solution.multipleVals2([2, 3, 5, 5, 2, 9 ,8])
                expect(res.sort()).toEqual([2, 5].sort())
        })
})
