/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-09 10:50:31
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:45:54
 * @FilePath: \LeetCode\09.isPalindrome.js
 * @Description: (简单)回文数
 */

 
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false;  //负数、以零结尾的数，直接返回false

  let temp = 0; //临时答案,存储反转后的值
  let s = x;  

  while (s) {
    temp = temp * 10 + (s % 10); 
    s = (s / 10) | 0;
  }
  return x === temp; 
};
