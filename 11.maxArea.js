//  中等 盛水最多的容器

/* 
    --采用双指针法， 从两端开始遍历， 只移动较短的柱子
    

*/
var maxArea = function (arr) {
  let len = arr.length;

  let left = 0;
  let right = len - 1;

  let max = -Infinity;
  // 边界判断
  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    max = height * width > max ? height * width : max;

    // 移动较短的墙
    if (arr[left] < arr[right]) left++;
    else right--;
  }
  return max;
};
