/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-08 22:43:50
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:12:07
 * @FilePath: \LeetCode\05.longestPalindrome.js
 * @Description: (中等) 最长回文子串
 */

var longestPalindrome = function (s) {
  if (s.length <= 1) return s; 
  let maxLength = 1;  //最大长度为1
  let start = 0;     
  function h(left, right) { 
    while (left >= 0 && right < s.length && s[left] === s[right]) { 
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1; //更新最大长度
        start = left; //开始位置即为left
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    h(i - 1, i + 1); //长度为基数
    h(i, i + 1); //长度为偶数
  }
  return s.substring(start, start + maxLength);
};
