/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  if (!head) return [];
  const arrFLL = [];

  while (head) {
    arrFLL.push(head.val);
    head = head.next;
  }
  let max = 0;
  for (let i = 0; i < arrFLL.length; i++) {
    let found = false;
    for (let j = i + 1; j < arrFLL.length; j++) {
      if (arrFLL[i] < arrFLL[j]) {
        arrFLL[i] = arrFLL[j];
        found = true;
        break;
      }
    }
    if (!found) arrFLL[i] = 0;
  }

  return arrFLL;
};
