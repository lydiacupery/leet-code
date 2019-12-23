/*
Given two arrays A and B of equal size, 
the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
*/

export class Solution1 {

  public static advantageCount(A: number[], B: number[]){
    // sort A
    A.sort((a, b) => a -b)
    let newA = []

    // start at B = 0
    let bIndex = 0;

    while(bIndex < B.length){
      let aIndex = this.getIndexForA(A, B[bIndex], 0, A.length - 1)
      newA.push(A[aIndex])
      A.splice(aIndex, 1)

      bIndex ++
    }

    return newA
  }


  // get smallest value bigger than bVal
  public static getIndexForA(aVals: number[], bVal: number, startIndex: number, stopIndex: number): number{
    if(stopIndex < startIndex) {
      return 0
    }
    const midIndex = Math.ceil((startIndex + stopIndex) / 2)
    const midVal = aVals[midIndex]
    if(aVals[midIndex - 1] !== undefined) {
      const prev = aVals[midIndex - 1];
      if(bVal >= prev && bVal < midVal){
        return midIndex
      }
    }

    if(bVal >= midVal){
      return this.getIndexForA(aVals, bVal,midIndex + 1, stopIndex)
    }
    else { 
      return this.getIndexForA(aVals, bVal,startIndex, midIndex -1 )
    }
  }
}

export class Solution2 {
  public static advantageCount(A: number[], B:number[]){
    // sort A & B
    A.sort((a, b) => a-b)
    const sortedB = [...B].sort((a, b) => b-a) // sort desc

    let toReturn: Map<number, number[]> = new Map()
    // create a map of vals to return

    // go through B, if B < A first val, take off first val of A
    sortedB.forEach(b => {
      if(b < A[A.length-1]) {
        toReturn.set(b, [...(toReturn.get(b) || []), A.pop()!])
      }  
    })

    // when returning, if there is entry in map for B, return entry, other wise take from A
    return B.map(b => (toReturn.get(b) && toReturn.get(b)!.length > 0) ? toReturn.get(b)!.pop() : A.pop())


  }
}