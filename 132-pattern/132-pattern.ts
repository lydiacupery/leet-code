



/*

get min array

create a stack

go through all nums from the end

 for num, remove things from stack if there 1) is smthing in the stack 2) the val in stack is smaller than min[currIndex]

 that means that the stack should always be sorted with the smallest val on top and the vals are all bigger than the min

 check if the top val on the stack is less than the current nums[currIndex], is so have found a 132

 push the thing to the stack

*/

export class Solution {

public static find132Pattern(nums: number[]) {

        const mins = nums.reduce((prev, curr) => {
                const prevMin = prev[prev.length - 1]
                return [...prev, Math.min(prevMin !== undefined ? prevMin : curr, curr)]
        }, [])
        const stack: number[] = []

        for(let i = nums.length; i >= 0; i --){
                if(nums[i] > mins[i]){
                        // for num, remove things from stack if there 1) is smthing in the stack 2) the val in stack is smaller than min[currIndex]
                        while(stack.length > 0 && stack[stack.length -1 ] <= mins[i]){
                                stack.pop()
                        }
                        // can we return true?
                        if(stack.length > 0 && stack[stack.length -1] < nums[i]){
                                return true
                        }
                        stack.push(nums[i])
                }
        }

        return false

}

}
