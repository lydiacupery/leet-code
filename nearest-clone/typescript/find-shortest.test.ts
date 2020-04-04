import {Solution} from './find-shortest'



describe('min path sum', () => {
        it("1", () => {
        const result = Solution.findShortest(3, [1, 2,4], [2, 3, 2], [1, 2, 3, 4], 2)
        expect(result).toEqual(-1)
        }),
        it("2", () => {
        const result = Solution.findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1)
        expect(result).toEqual(1)
        })
        fit("3", () => {
        const result = Solution.findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2)
        expect(result).toEqual(3)

        })

})
