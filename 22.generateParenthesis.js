/* 
    中等： 括号生成
*/
var generateParenthesis = function (n) {
  if (n === 0) return [];

  let res = [];

  function dfs(left, right, str) {
    //左右括号所剩的数量，str是当前构建的字符串
    if (str.length === 2 * n) {
      //字符串构建完成时
      res.push(str); //加入解集
      return; //结束当前递归分支
    }

    if (left > 0) {
      //只要左括号有剩，就可以选他 ，然后继续做选择（递归）
      dfs(left - 1, right, str + '(');
    }
    if (left < right) {
      //右括号比左括号剩的多，才能选右括号
      dfs(left, right - 1, str + ')'); //然后继续做选择（递归）
    }
  }
  dfs(n, n, ''); //递归的入口
  return res;
};
