/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-14 08:53:00
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:59:58
 * @FilePath: \LeetCode\17.letterCombinations.js
 * @Description:  (中等) 电话号码的字母组合
 */
/* 
        输入：digits = "23"
        输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/ 
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const res = [];
  //数字对应的字母组合表
  const map = { 
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  // 回溯
  const dfs = (curStr, i) => {
    if (i > digits.length - 1) { //递归结束条件: i大于电话号码长度
      res.push(curStr);
      return;
    }

    const letter = map[digits[i]]; 
    for (let c of letter) {
      dfs(curStr + c, i + 1);
    }
  };
  dfs('', 0); //递归开始条件
  return res;
};
