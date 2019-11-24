import {Solution, ListNode} from './add-two-numbers'

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

describe('add two numbrs', () => {
        it("1", () => {
        const val1 = new ListNode(2)
        val1.next = new ListNode(4)
        val1.next.next = new ListNode(3)

        const val2 = new ListNode(5)
        val2.next = new ListNode(6)
        val2.next.next = new ListNode(4)

        const res = Solution.addNumbers(val1, val2)
        expect(res.val).toEqual(7)
        expect(res.next!.val).toEqual(0)
        expect(res.next!.next!.val).toEqual(8)

        })
})
