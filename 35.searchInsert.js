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
