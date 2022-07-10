// 中等  整数转罗马数字

/*  
        --模拟 ，建立一张 数值-符号 对应表 ， 从大致小遍历

*/

var intToRoman = function (num) {
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  const roMan = [];
  for (const [value, symbol] of valueSymbols) {
    // 循环取值
    while (value <= num && num > 0) {
      num = num - value;
      roMan.push(symbol);
    }
  }
  return roMan.join('');
};
