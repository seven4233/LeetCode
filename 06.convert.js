/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-09 09:17:41
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:33:27
 * @FilePath: \LeetCode\06.convert.js
 * @Description: (中等) z型变化
 */

var convert = function (s, numRows) {
  if (s.length < 3 || numRows < 2) return s;

  let row = 0;
  let reverserFlag = false; //反向标志
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    // 如果不加此判断，则每一行前都会有undefined
    if (!arr[row]) arr[row] = '';
    arr[row] += s[i];

    if (row === numRows - 1) { //行数触底，方向反转
      reverserFlag = true;
    } else if (row === 0) { // 行数归零，方向反转
      reverserFlag = false;
    }
    if (reverserFlag) {
      row--;
    } else {
      row++;
    }
  }
  return arr.join('');
};
