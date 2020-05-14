/* 

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL


Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL


    The relative order inside both the even and odd groups should remain as it was in the input.
    The first node is considered odd, the second node even and so on ...


*/

var oddEvenList = function (head) {
  if (!head) return null;
  const nLL = {};
  let count = 0;
  let even, odd;
  while (head) {
    count++;
    if (count % 2 == 1) {
      if (!odd) {
        nLL.val = head.val;
        nLL.next = null;
        odd = nLL;
      } else {
        const temp = { val: head.val, next: null };
        temp.next = odd.next;
        odd.next = temp;
        odd = odd.next;
      }
    } else {
      if (!even) {
        odd.next = { val: head.val, next: null };
        even = odd.next;
      } else {
        const temp = { val: head.val, next: null };
        temp.next = even.next;
        even.next = temp;
        even = even.next;
      }
    }
    head = head.next;
  }

  return nLL;
};
