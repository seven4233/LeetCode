// 整数反转
/* 
        -- |0 表示取整 ， 正数向下取整， 负数向上取整
        -- result|0 超出范围的与本省或运算结果不同，可以用来进行边界判断

*/

var reverse = function (x) {
  let result = 0;
  while (x != 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
