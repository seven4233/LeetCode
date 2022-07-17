/* 

    中等： 两两交换链表中的节点
    如：【1，2，3，4】 => 【2.1.4.3】
*/

var swapPairs = function (head) {
  if (head === null || head.next === null) return head; //如果为空，或只有一个节点，则返回

  let newHead = head.next; // 新链表的头节点  即[1,2,3,4]中的 2

  head.next = swapPairs(newHead.next); // 原链表的第二个节点指向下一个链表的头节点 即：1 -> swapPairs([3,4])

  newHead.next = head; // 新链表的第二个节点为原链表的头节点  即: 2 -> 1 -> swapPairs([3,4])
  return newHead; //返回新的头节点
};
