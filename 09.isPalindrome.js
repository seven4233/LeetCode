// 简单题--回文数

/*  */

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false;

  let temp = 0;
  let s = x;

  while (s) {
    temp = temp * 10 + (s % 10);
    s = (s / 10) | 0;
  }
  return x === temp;
};
