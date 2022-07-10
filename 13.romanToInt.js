// 简单 罗马数字转整数

var romanToInt = function (s) {
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
    if (value < sybolValue.get(s[i + 1]) && i < s.length - 1) {
      res -= value;
    } else {
      res += value;
    }
  }
};
