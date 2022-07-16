// 简单题  --最长公共前缀
/* 


*/

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < strs[i].length; j++) {
      if (ans[j] !== strs[i][j]) break;
    }

    ans = ans.substr(0, j);
    // 如果有一个不匹配，则为空
    if (ans === '') return '';
  }

  return ans;
};
