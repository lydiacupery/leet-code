export class Solution {

  public static addNumbers(number1: ListNode | null, number2: ListNode | null){

    let resultNode = new ListNode(0)
    const startingPoint = resultNode

    let carry = 0

    while(number1 || number2 ) {
      const number1Val = (number1 !== null) ? number1.val : 0
      const number2Val = (number2 !== null) ? number2.val : 0
      const addOn = number1Val + number2Val + carry 
      const sumToAdd = addOn % 10
      resultNode.next = new ListNode(sumToAdd)
      resultNode = resultNode.next
      carry = addOn >= 10 ? 1 : 0
      number1 = number1 && number1.next
      number2 = number2 && number2.next
    }
    return startingPoint.next ? startingPoint.next : startingPoint
  }
}

 export class ListNode {
      val: number;
      next: ListNode | null;
    constructor(x: number){
      this.val = x
    }
   }