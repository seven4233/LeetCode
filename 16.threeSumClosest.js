/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-11 10:22:25
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 10:40:32
 * @FilePath: \LeetCode\16.threeSumClosest.js
 * @Description: (中等)  --最接近的三数之和 
 */

var threeSumClosest = function (nums, target)  {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1; 
    let right = nums.length - 1;
    while (left < right) {
      let res = nums[i] + nums[left] + nums[right]; //三数之和
      res >= target
      // res-target 的值越小，表示约接近,即在数组中的位置越靠前
        ? ((ans[res - target] = res), right--) //res大于等于target, 右指针左移
        : ((ans[target - res] = res), left++);
    }
  }
  //   第一个不为undefined的值即为本题答案
  return ans.find((v) => v != undefined);
};
