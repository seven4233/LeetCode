// 最长回文子串

var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let maxLength = 1;

  let start = 0;
  function h(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    h(i - 1, i + 1);
    h(i, i + 1);
  }
  return s.substring(start, start + maxLength);
};
