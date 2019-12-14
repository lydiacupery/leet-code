export class Solution {

        public static searchInRotatedSortArray(
                nums: number[],
                target: number
        ): number {
                return this.searchInRotateSortArrayHelper(nums, target, 0, nums.length -1 )
        }

        public static searchInRotateSortArrayHelper(
                nums: number[], target: number, start: number, end: number
        ): number {
                if (start > end) { return -1 }
                const firstVal = nums[start]
                const midPoint = start + Math.ceil((end - start) / 2)
                const midVal = nums[midPoint]
                if (midVal === target) { return midPoint }
                const lastVal = nums[end]

                if (isAscending(firstVal, midVal) ? 
                target >= firstVal && target < midVal : // 1rst half sorted, target should be in 1rst half
                (target < midVal || target > lastVal) )  // 1rst half not sorted, 2nd half sorted, target not in 2nd half
                { 
                        return this.searchInRotateSortArrayHelper(nums, target, start, midPoint - 1)
                } else  { 
                        return this.searchInRotateSortArrayHelper(nums, target, midPoint + 1, end)
                } 

        }

}

const isAscending = (val1: number, val2: number) => val2 > val1
