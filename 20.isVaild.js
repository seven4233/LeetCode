/* 
    简单 ： 有效的括号
*/
var isValid = function (s) {
  const n = s.length;
  if (n % 2) return false;

  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(ch))
        return false;
      else {
        stack.pop();
      }
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
};
