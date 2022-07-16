/*  中等 三数之和 ： 
                给你一个包含 n 个整数的数组 nums，
                判断 nums 中是否存在三个元素 a，b，c ，
                使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */

var threeSum = function (nums) {
  const ans = [];
  const len = nums.length;
  if (nums.length < 3) return ans;

  nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return ans;
    if (i > 0 && nums[i] === nums[i + 1]) continue; //去重
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let res = nums[i] + nums[left] + nums[right];
      if (res === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++; //去重
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (res > 0) right--;
      else if (res < 0) left++;
    }
  }

  return ans;
};
