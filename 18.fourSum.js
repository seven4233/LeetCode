/* 
    四数之和 ： 中等

    
*/
var fourSum = function (nums, target) {
  const qurdruplets = [];

  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);

  const length = nums.length;

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // nums[a]+nums[b]-target<-(nums[c]+nums[d])

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = length - 1;

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
        while (left < right && nums[left] === nums[++left]);
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }
  return qurdruplets;
};

const nums = [1, 0, -1, 0, -2, 2],
  target = 0;
let result = fourSum(nums, target);
console.log(result);
