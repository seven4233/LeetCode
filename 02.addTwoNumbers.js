/* 
  -----------------------------------------（中等）两数相加 -------------------------------------------------------------------------
      输入：l1 = [2,4,3], l2 = [5,6,4]
      输出：[7,0,8]
      解释：342 + 465 = 807.

*/

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(); //新链表的头节点
  let cur = dummy; //当前指针 cur 指向头节点
  let carry = 0; // 进位值 （非0即1）
  while (l1 !== null || l2 !== null) {
    //如果 l1 或者 l2有一个不为空，则继续遍历
    let sum = 0;
    if (l1 !== null) {
      //如果l1不为空 ，则sum = sum + l1.val 即： sum = 0+2
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      //如果l2不为空 ， 则sum = sum + l2.val 即： sum = 0+2+5
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry; // sum = 0 + 2 + 5 +carry
    cur.next = new ListNode(sum % 10); //把sum赋值给cur的下一个节点
    cur = cur.next; //cur后移
    carry = Math.floor(sum / 10); //carry = sum /10, 如果大于 10则取 1
  }
  //循环结束，如果最后有个进位, 则加入到新链表的最后位置
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummy.next;
};
