/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-11 09:21:07
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:32:32
 * @FilePath: \LeetCode\14.longestCommonPrefix.js
 * @Description: (简单) 最长公共前缀
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  // 先让第一个为参照赋值给ans
  let ans = strs[0];

  // 遍历外层数组
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // 遍历每个字符串
    for (; j < strs[i].length; j++) {
      //  比较不同字符串的 前缀
      if (ans[j] !== strs[i][j]) break;
    }

    ans = ans.substr(0, j);
    // 如果有一个不匹配，则为空，即无公共前缀
    if (ans === '') return '';
  }

  return ans;
};
