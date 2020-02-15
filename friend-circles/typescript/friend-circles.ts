export class Solution {
  public static findCircleNum(M: number[][]) {
    let count = 0
      M.forEach((r, ri) => r.forEach(c => {
        if(c === 1) {
          count = count + 1
          dfs(ri)
        }
      }))

      function dfs(friendIndex: number){
        M[friendIndex].forEach((v, i) => {
          if(v===1){
            M[friendIndex][i] = 0
            dfs(i)
          }
        })

      }

      return count
  } 
}

