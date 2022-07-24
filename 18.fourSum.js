/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-14 09:39:37
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 11:08:08
 * @FilePath: \LeetCode\18.fourSum.js
 * @Description: (中等)四数之和
 */

var fourSum = function (nums, target) {
  const qurdruplets = [];

  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b); //还是先排序

  const length = nums.length;

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // nums[a]+nums[b]-target<-(nums[c]+nums[d])

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; //去重

      let left = j + 1; //左指针
      let right = length - 1; //右指针

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          left++;
          continue;
        }
        if (sum > target) {
          right--;
          continue;
        }
        qurdruplets.push([nums[i], nums[j], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[++left]); //去重
        while (left < right && nums[right] === nums[--right]); //去重
      }
    }
  }
  return qurdruplets;
};

const nums = [1, 0, -1, 0, -2, 2],
  target = 0;
let result = fourSum(nums, target);
console.log(result);
