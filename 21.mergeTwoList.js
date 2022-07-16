/* 
    简单： 合并两个有序链表
    
*/

var mergeTwoLists = function (l1, l2) {
  let prehead = new ListNode(-1);
  let prev = prehead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 ? l1 : l2;
  return prehead.next;
};
