/* 

  ------------------------------------------------(中等)无重复字符的最长字串----------------------------------------------------------------
    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


*/

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length; //长度小于2，直接返回

  let left = 0; // 左指针从 0 开始
  let right = 1; //有指针从1开始
  let temp; //临时区间
  let max = 1; //初始最大长度为1

  while (right < s.length) {
    temp = s.slice(left, right);
    // 如果区间包含左指针， 则表示有重复字符， 左指针右移
    if (temp.indexOf(s.charAt(right)) > -1) {
      left++;
      continue;
    } else {
      // 无重复，则右指针右移
      right++;
    }
    if (right - left > max) max = right - left; //更新最大值
  }
  return max;
};
