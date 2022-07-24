/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-14 10:57:09
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 11:15:27
 * @FilePath: \LeetCode\19.removeNthFromEnd.js
 * @Description: (中等) 删除链表的倒数第n个节点
 */
    
var removeNthFromEnd = function (head, n) {
  let slow = head, //慢指针
    fast = head; //快指针

  while (n--) { 
    fast = fast.next; //快指针定位到第n个节点
  }
  //如果fast为空,则没有倒数第n个数
  if (!fast) {
    return head.next;
  }
  // 如果fast下一个节点存在，则当fast移动到末位时，slow指向的值即为要删除的节点
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // 跳过该节点即可
  slow.next = slow.next.next;
  return head;
};
