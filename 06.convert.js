// z型变化

var convert = function (s, numRows) {
  if (s.length < 3 || numRows < 2) return s;

  let row = 0;
  let reverserFlag = false;
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    // 如果不加此判断，则每一行前都会有undefined
    if (!arr[row]) arr[row] = '';
    arr[row] += s[i];

    if (row === numRows - 1) {
      reverserFlag = true;
    } else if (row === 0) {
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
