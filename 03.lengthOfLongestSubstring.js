// !  无重复字符的最长字串 的长度

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let left = 0;
  let right = 1;
  let temp;
  let max = 1;

  while (right < s.length) {
    temp = s.slice(left, right);
    if (temp.indexOf(s.charAt(right)) > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    if (right - left > max) max = right - left;
  }
  return max;
};
