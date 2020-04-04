export class Solution {
  public static multipleVals1(vals: number[]) {
    let count: {[n: number]: number} = {};
    vals.forEach((val) => {
      if (count[val] === undefined){
        count[val] = 1
      }
      else {
        count[val] = count[val] + 1
      }
    })

    return Object.entries(count).reduce((prev, [key, value]) => value > 1 ? [...prev, Number(key)] : [...prev], [])
  } 

  public static multipleVals2(vals: number[]){
    const sorted = vals.sort((a, b) => a - b)
    const result: number[] = []
    sorted.forEach((val, i) => (sorted[i-1] && sorted[i-1] === val) && result.push(val))
    return result
  }
}

