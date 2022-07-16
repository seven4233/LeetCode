/* 
    中等  --最接近的三数之和 
    
*/

var threeSumClosest = function (nums, target) {
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let res = nums[i] + nums[left] + nums[right];
      res >= target
        ? ((ans[res - target] = res), right--)
        : ((ans[target - res] = res), left++);
    }
  }
  //   第一个不为undefined的值即为本题答案
  return ans.find((v) => v != undefined);
};
