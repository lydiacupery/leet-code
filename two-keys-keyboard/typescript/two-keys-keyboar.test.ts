import { minSteps } from "./two-keys-keyboard"



describe('min steps', () => {
        it("1", () => {
          expect(minSteps(3)).toEqual(3)
        })
        it("2", () => {
          expect(minSteps(4)).toEqual(4)
        })
        it("3", () => {
          expect(minSteps(6)).toEqual(5)
        })
      })