var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummy.next;
};
