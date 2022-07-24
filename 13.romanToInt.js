/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-10 09:33:39
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:25:29
 * @FilePath: \LeetCode\13.romanToInt.js
 * @Description: (简单) 罗马数字转整数
 */

var romanToInt = function (s) {
  // 符号 - 数值对应表
  const sybolValue = new Map();
  sybolValue.set('I', 1);
  sybolValue.set('V', 5);
  sybolValue.set('X', 10);
  sybolValue.set('L', 50);
  sybolValue.set('C', 100);
  sybolValue.set('D', 500);
  sybolValue.set('M', 1000);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let value = sybolValue.get(s[i]);
    // 更小的符号在前，则表示减法
    if (value < sybolValue.get(s[i + 1]) && i < s.length - 1) {
      res -= value;
    } else {
      res += value;
    }
  }
  return res;
};
