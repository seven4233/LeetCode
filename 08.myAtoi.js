// 字符串转整数

/* 
        --采用 "自动机" 解题思路
*/

var myAtoi = function (str) {
  class Automaton {
    constructor() {
      this.state = 'start';
      this.sign = 1;
      this.answer = 0;

      // 状态表
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ]);
    }

    // 获取状态的索引
    getIndex(char) {
      if (char === ' ') {
        return 0;
      } else if (char === '+' || char === '-') {
        return 1;
      } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        return 2;
      } else {
        return 3;
      }
    }

    get(char) {
      //  根据当前char的状态 更新下一个 char 所处的状态
      this.state = this.map.get(this.state)[this.getIndex(char)];

      //   如果状态为number  则对结果进行加工
      if (this.state === 'in_number') {
        this.answer = this.answer * 10 + (char - 0);
        this.answer =
          this.sign === 1
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, -Math.pow(-2, 31));
      } else if (this.state === 'signed') {
        // 如果状态为signed 则判断正负号
        this.sign = char === '+' ? 1 : -1;
      }
    }
  }

  let automaton = new Automaton();
  for (let char of str) automaton.get(char);

  return automaton.sign * automaton.answer;
};
