/*
 * @Author: seven4233 1985858775@qq.com
 * @Date: 2022-07-23 09:09:58
 * @LastEditors: seven4233 1985858775@qq.com
 * @LastEditTime: 2022-07-24 08:41:59
 * @FilePath: \LeetCode\35.searchInsert.js
 * @Description: (简单)搜索插入位置
 */
/* 
--------------------------------------------(简单)搜索插入位置 -------------------------------------------
输入: nums = [1,3,5,6], target = 5
输出: 2

*/
var searchInsert = function(nums, target){

        let left = 0,right = nums.length-1
        let ans = 0
        if(nums[right] < target) return right+1 

        while(left <= right){

            const mid = (left + right) / 2|0
            if(nums[mid] >=target){
                right = mid-1 
                ans = mid
            }else{
                left = mid +1
            }

        }
        return ans
        // 1,3,4,5,6,8,9 --6

}
