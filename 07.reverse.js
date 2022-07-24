/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-09 09:35:20
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:40:23
 * @FilePath: \LeetCode\07.reverse.js
 * @Description: (中等) 整数反转
 */


var reverse = function (x) {
  let result = 0; 
  while (x != 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0; // |0 表示取整 ， 正数向下取整， 负数向上取整
  }
  return (result | 0) === result ? result : 0; //result|0 超出范围的与本省或运算结果不同，可以用来进行边界判断
};
