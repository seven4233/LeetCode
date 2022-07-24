/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-11 09:43:05
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:37:29
 * @FilePath: \LeetCode\15.threeSum.js
 * @Description: (中等) 三数之和 
 */
/*  
                给你一个包含 n 个整数的数组 nums，
                判断 nums 中是否存在三个元素 a，b，c ，
                使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */
 
var threeSum = function (nums) {
  const ans = [];
  const len = nums.length;
  if (nums.length < 3) return ans;

  nums.sort((a, b) => a - b); // 排序(小到大)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return ans;  //最小的数大于零，直接返回
    if (i > 0 && nums[i] === nums[i + 1]) continue; //去重
    let left = i + 1;  //左指针
    let right = len - 1; //右指针

    while (left < right) {
      let res = nums[i] + nums[left] + nums[right]; //三数之和
      if (res === 0) {  //为零则push到结果数组
        ans.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++; //去重
        while (nums[right] === nums[right - 1]) right--; //去重

        left++;
        right--;
      } else if (res > 0) right--;  //res小于零 右指针左移
      else if (res < 0) left++; //res 大于零，左指针右移
    }
  }

  return ans;
};
