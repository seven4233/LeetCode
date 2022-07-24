/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-10 09:05:35
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 09:46:55
 * @FilePath: \LeetCode\11.maxArea.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
