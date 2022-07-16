/* 
    中等： 电话号码的字母组合
        输入：digits = "23"
        输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const res = [];
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
  const dfs = (curStr, i) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }

    const letter = map[digits[i]];
    for (let c of letter) {
      dfs(curStr + c, i + 1);
    }
  };
  dfs('', 0);
  return res;
};
