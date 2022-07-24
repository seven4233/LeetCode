/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-10 09:20:22
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:20:29
 * @FilePath: \LeetCode\12.intToRoman.js
 * @Description: (中等)  整数转罗马数字
 */

var intToRoman = function (num) {
  //   --模拟 ，建立一张 数值-符号 对应表 ， 从大致小遍历
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  const roMan = [];
  for (const [value, symbol] of valueSymbols) {
    // 循环取值
    while (value <= num && num > 0) {
      num = num - value;
      roMan.push(symbol);
    }
  }
  return roMan.join('');
};
