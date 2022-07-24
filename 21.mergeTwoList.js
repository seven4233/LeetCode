/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-16 22:17:16
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:02:36
 * @FilePath: \LeetCode\21.mergeTwoList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
