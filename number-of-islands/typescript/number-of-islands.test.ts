import { Solution } from "./number-of-islands"



describe('min path sum', () => {
        it("1", () => {
          const result = Solution.numIslands([
            ['1','1','1','1','0'],
            ['1','1','0','1','0'],
            ['1','1','0','0','0'],
            ['0','0','0','0','0'],
          ])
          expect(result).toEqual(1)
        }),
        it("2", () => {
          const result = Solution.numIslands([
            ['1','1','0','0','0'],
            ['1','1','0','0','0'],
            ['0','0','1','0','0'],
            ['0','0','0','1','1'],
          ])
          expect(result).toEqual(3)
        })
       
})
