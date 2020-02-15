import { Solution } from "./friend-circles"


describe('friend cirlces', () => {
        it("1", () => {
                const res = Solution.findCircleNum([[1,1,0],
                        [1,1,0],
                        [0,0,1]])
                expect(res).toEqual(2)
        })
        it("2", () => {
                const res = Solution.findCircleNum([[1,1,0],
                        [1,1,1],
                        [0,1,1]])
                expect(res).toEqual(1)
        })
})
