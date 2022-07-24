/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-15 08:57:04
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 11:24:18
 * @FilePath: \LeetCode\20.isVaild.js
 * @Description: (简单) 有效的括号 
 */

var isValid = function (s) {
  const n = s.length;
  if (n % 2) return false; //不配对，直接返回

  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];
  for (let ch of s) {
    if (pairs.has(ch)) { //如果是右括号
      if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(ch)) //但是stack为空或者stack栈顶元素与之不配对，则返回false
        return false;
      else { //配对，则stack弹出配对成功的左括号
        stack.pop();
      }
    } else {  //如果是左括号,加入栈顶
      stack.push(ch);
    }
  }
  return !stack.length; // stack为空，表示全部配对成功，返回true，否则返回false
};
